import React, { useEffect, useState } from 'react';
import { RetailProductInputField } from "@/models/RetailProduct";
import {vehicleInputFieldsGeneric} from "@/app/products/components/VehicleInputFields";
import {writeRetailProductData} from "@/app/utils/firebase/vehicleUtils";
import {createVehicleData} from "@/app/products/components/vehicleFormUtils";
import useAuthUser from "@/hooks/useAuthUser";

const initialProductState = {
    owner_id: '',
    brand: '',
    model: '',
    name: '',
    price: 0,
    category: '',
    description: '',
    stockQuantity: 0,
    supplier: '',
    sales: 0,
    ratings : '',
    imageUrl: ''
};

const useDetermineFormType = (type: string): RetailProductInputField[] => {
    const [fields, setFields] = useState<RetailProductInputField[]>([]);

    useEffect(() => {
        if (type === 'vehicle') {
            setFields(vehicleInputFieldsGeneric)
        }
    }, [type]);

    return fields;
};

const ProductInputForm: React.FC<{ type: string }> = ({ type }) => {
    const userId = useAuthUser();
    const [product, setProduct] = useState(initialProductState);
    const fields = useDetermineFormType(type);
    const [receiptUrls, setReceiptUrls] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleUrlChange = (index: number, value: string) => {
        const newUrls = [...receiptUrls];
        newUrls[index] = value;
        setReceiptUrls(newUrls);
    };

    const handleAddUrl = () => {
        setReceiptUrls(prevUrls => [...prevUrls, '']);
    };

    const handleRemoveUrl = (index: number) => {
        const newUrls = receiptUrls.filter((_, idx) => idx !== index);
        setReceiptUrls(newUrls);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if the user is authenticated
        if (!userId) {
            console.error("User is not authenticated");
            return;
        }
        product.owner_id = userId
        console.log('User ID:', userId);
        // Create the vehicle data object
        const newVehicleData = createVehicleData(product, receiptUrls, userId, []);

        newVehicleData.owner_id = userId
        console.log("Submitting Product:", { ...product, receiptUrls });

        try {
            // Write to Firebase
            await writeRetailProductData(newVehicleData);
            console.log("Product submitted successfully!");

            // Reset the form after successful submission
            setProduct(initialProductState);
            setReceiptUrls([]);
        } catch (error) {
            console.error("Error submitting product:", error);
        }
    };

    if (fields.length === 0) return null;

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-200 text-gray-600 rounded-lg shadow-lg">
            <BuildGenericInputForm
                fields={fields}
                urlFields={receiptUrls}
                onChange={handleChange}
                onUrlChange={handleUrlChange}
                onAddUrl={handleAddUrl}
                onRemoveUrl={handleRemoveUrl}
                onSubmit={handleSubmit}
            />
        </div>
    );
};


const SelectProductType: React.FC = () => {
    const [productType, setProductType] = useState<string>('');
    const [isFormVisible, setFormVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductType(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (productType === 'vehicle') {
            setFormVisible(true);
        } else {
            alert('Product type not recognized!');
        }
    };

    return (
        <div>
            {!isFormVisible ? (
                <form onSubmit={handleSubmit} className="my-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Enter Product Type:</label>
                        <input
                            type="text"
                            value={productType}
                            onChange={handleInputChange}
                            className="bg-gray-100 text-gray-600 border rounded p-2 w-full"
                            placeholder="e.g., vehicle"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gray-500 text-white p-2 rounded">
                        Set Product Type
                    </button>
                </form>
            ) : (
                <ProductInputForm type={productType} />
            )}
        </div>
    );
};


const BuildGenericInputForm: React.FC<{
    fields: RetailProductInputField[],
    urlFields: string[],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onUrlChange: (index: number, value: string) => void,
    onAddUrl: () => void,
    onRemoveUrl: (index: number) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}> = ({ fields, urlFields, onChange, onUrlChange, onAddUrl, onRemoveUrl, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
            <h2 className="text-gray-800 text-2xl font-bold mb-4 text-center">Add Product</h2>
            <div className="overflow-y-auto h-full mx-8 my-4 pr-4 pl-2">
                {fields.map(({ name, type, placeholder }) => (
                    <div key={name} className="mb-4">
                        <label className="block text-gray-700 mb-1">{placeholder}</label>
                        <input
                            type={type}
                            name={name}
                            onChange={onChange}
                            required
                            className="bg-gray-100 border rounded p-2 w-full"
                        />
                    </div>
                ))}
                {/* Render URL Fields */}
                {urlFields.map((url, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => onUrlChange(index, e.target.value)}
                            placeholder="Receipt URL"
                            className="bg-gray-100 border rounded p-2 w-full"
                        />
                        <button
                            type="button"
                            onClick={() => onRemoveUrl(index)}
                            className="ml-2 bg-red-500 text-white rounded p-2"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={onAddUrl}
                    className="mt-2 bg-blue-500 text-white rounded p-2"
                >
                    Add Receipt URL
                </button>
            </div>
            <button
                type="submit"
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200 w-full"
            >
                Add Product
            </button>
        </form>
    );
};

export {SelectProductType, BuildGenericInputForm};