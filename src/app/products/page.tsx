'use client'
import React, { useEffect, useRef, useState } from "react";
import '@/styles/blur-content.css';
import RetailProductTable from "@/app/products/components/RetailProductTable";
import {RetailProduct} from "@/models/RetailProduct";
import BuildVehicleInputForm from "@/app/products/components/BuildVehicleInputForm";
import {Vehicle, VehicleInputField} from "@/models/Vehicle";
import useAuthUser from "@/hooks/useAuthUser";
import {createVehicleData, handleVehiclePropertyChange} from "@/app/products/components/vehicleFormUtils";
import {writeRetailProductData} from "@/app/utils/firebase/vehicleUtils";
import InitialVehicleState from "@/app/products/components/initialVehicleState";
import VehicleInputFields from "@/app/products/components/VehicleInputFields";
import {SelectProductType} from "@/app/products/components/ProductEditEntryForm";

const products: RetailProduct[] = [
    {
        name: 'Paw-some Sleepy Keyboard',
        product_uuid: 'PSK-001',
        sales: 155,
        price: 29.99,
        category: 'Tools',
        description: 'So that you can work, and keep your feline happy',
        stockQuantity: 50,
        supplier: 'PawTech Corp',
        ratings: 4.5,
        imageUrl: ['url']
    },
    {
        name: 'Refurbished Sleepy Box',
        product_uuid: 'RSB-002',
        sales: 122,
        price: 49.99,
        category: 'Furniture',
        description: 'One does not simply undervalue a box',
        stockQuantity: 30,
        supplier: 'PetRest Inc.',
        ratings: 4.7,
        imageUrl: ['url']
    },
    {
        name: 'Curiosity Cat Trap',
        product_uuid: 'CCT-003',
        sales: 107,
        price: 19.99,
        category: 'Tools',
        description: 'Shordinger\'s pride',
        stockQuantity: 25,
        supplier: 'Quantum LLC',
        ratings: 4.2,
        imageUrl: ['url']
    },
    {
        name: 'Chirper-ex Premium',
        product_uuid: 'CEP-004',
        sales: 71,
        price: 79.99,
        category: 'Utilities',
        description: 'Unadulterated chirping, all speech is free speech',
        stockQuantity: 15,
        supplier: 'Ex LLC',
        ratings: 4.8,
        imageUrl: ['url']
    }
];

const getBlurClass = (isOverlayVisible: boolean) => {
    return isOverlayVisible ? 'blur-content' : '';
};

function Products() {
    const userId = useAuthUser();
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [vehicle, setVehicle] = useState<Vehicle>(InitialVehicleState());
    const [mileageInput, setMileageInput] = useState<string>('');
    const [receiptUrls, setReceiptUrls] = useState<string[]>([]);

    const [formData, setFormData] = useState<Partial<Vehicle>>({});

    const toggleOverlay = () => {
        setOverlayVisible(prev => !prev);
    };

    const onVehicleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleVehiclePropertyChange(event, setVehicle, setMileageInput);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value })); // Update formData state
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (isOverlayVisible && overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
            setOverlayVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside, isOverlayVisible]);

    const onVehicleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!userId) {
            console.error("User is not authenticated");
            return;
        }
        console.log("AddVehicleForm:: User Id: ", userId);
        console.log("AddVehicleForm:: created_at: ", new Date().toISOString());

        const newVehicleData = createVehicleData(vehicle, mileageInput, userId, receiptUrls);
        await writeRetailProductData(newVehicleData);
        console.log("AddVehicleForm:: newVehicleData: ", newVehicleData);

        setVehicle(InitialVehicleState());
        setReceiptUrls([]);
        setMileageInput('');
    };

    return (
        <div className="p-2 bg-gray-100 min-h-screen">
            <div className={getBlurClass(isOverlayVisible)}>
                <RetailProductTable products={products} toggleOverlay={toggleOverlay}/>
                <button onClick={toggleOverlay} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    {isOverlayVisible ? 'Hide Overlay' : 'Show Overlay'}
                </button>
            </div>
            <div>
                <SelectProductType/>
            </div>

            {isOverlayVisible && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={toggleOverlay}
                >
                    <div
                        className="text-white text-xl p-6 bg-black rounded-lg mx-auto overflow-y-auto max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form onSubmit={onVehicleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
                            <p>Input product form </p>
                            <BuildVehicleInputForm fields={VehicleInputFields(vehicle, mileageInput)}
                                                   onChange={onVehicleChange}/>
                            <button
                                type="submit"
                                className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-coffee-600 transition duration-200 w-full"
                            >
                                Add Vehicle
                            </button>
                            <button onClick={toggleOverlay} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;