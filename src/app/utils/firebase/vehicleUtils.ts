import { getDatabase, ref, set, get, remove} from "firebase/database";
import {Vehicle} from "@/models/Vehicle";
import {RetailProduct} from "@/models/RetailProduct";

export const writeRetailProductData = async <T extends RetailProduct>(retailProduct: T) => {
    const db = getDatabase();
    const reference = ref(db, 'vehicles/' + retailProduct.product_uuid);
    //Todo: when dynamic rules for firebase are written replace const reference with following:
    //  const refPath: string = (retailProduct.category + '/' + retailProduct.product_uuid)
    //  const reference = ref(db, refPath);

    // if (retailProduct.receipts === undefined) {
    //     console.warn('When receipts was empty, stayed empty, and became Undefined. Bummer');
    //     retailProduct.receipts = [];
    // }

    try {
        await set(reference, { ...retailProduct });
        console.log('Retail product data saved successfully', retailProduct);
    } catch (error) {
        console.error('Error saving retail product data:', error);
    }
};

export const readRetailProductData = async (vehicleId: string): Promise<Vehicle | null> => {
    const db = getDatabase();
    const reference = ref(db, 'vehicles/' + vehicleId);

    try {
        const snapshot = await get(reference);
        if (snapshot.exists()) {
            const vehicleData: Vehicle = snapshot.val();
            console.log('Vehicle data retrieved successfully:', vehicleData);
            return vehicleData;
        } else {
            console.log('No data available for this vehicle.');
            return null;
        }
    } catch (error) {
        console.error('Error reading vehicle data:', error);
        return null;
    }
};

export const deleteRetailProductData = async (vehicleId: string) => {
    const db = getDatabase();
    const reference = ref(db, 'vehicles/' + vehicleId);

    try {
        await remove(reference);
        console.log('Vehicle data deleted successfully');
    } catch (error) {
        console.error('Error deleting vehicle data:', error);
    }
};