import {Vehicle} from "@/models/Vehicle";
import { v4 as uuid_v4 } from 'uuid';
import {RetailProduct} from "@/models/RetailProduct";

export const handleVehiclePropertyChange = (event: React.ChangeEvent<HTMLInputElement>, setVehicle: React.Dispatch<React.SetStateAction<Vehicle>>, setMileageInput: React.Dispatch<React.SetStateAction<string>>) => {
    const { name, value } = event.target;

    if (name === 'mileage_km') {
        setMileageInput(value);
    }

    setVehicle((prevVehicle) => ({
        ...prevVehicle,
        [name]: value,
    }));
};

export const handleReceiptChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    receiptUrls: string[],
    setReceiptUrls: React.Dispatch<React.SetStateAction<string[]>>
) => {
    const updatedUrls = [...receiptUrls];
    updatedUrls[index] = event.target.value;
    setReceiptUrls(updatedUrls);
};

export const addReceiptUrl = (receiptUrls: string[] | null, setReceiptUrls: React.Dispatch<React.SetStateAction<string[]>>) => {
    setReceiptUrls([...((receiptUrls || []) as string[]), ""]);
};

export const createVehicleData = (
    product: RetailProduct,
    mileageInput: string,
    userId: string,
    receiptUrls: string[] = []
): RetailProduct => {
    const mileageValue = parseFloat(mileageInput);

    return {
        ...product,
        owner_id: userId,
        mileage_km: !isNaN(mileageValue) ? mileageValue : 0,
        product_uuid: product.product_uuid || uuid_v4(),
        receipts: receiptUrls,
    };
};