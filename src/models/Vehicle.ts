import {RetailProduct} from "@/models/RetailProduct";

interface Vehicle extends RetailProduct {
    // owner_id: string,
    brand: string;
    model: string;
    // manufactured_at: string;
    // condition: string;
    // mileage_km?: number;
    // vin?: string;
    // receipts?: string[];
}

interface VehicleInputField {
    name: string;
    type: string;
    placeholder: string;
    hint: string,
    value: string;
}

interface VehicleInputFieldsProps {
    fields: VehicleInputField[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { Vehicle, VehicleInputField, VehicleInputFieldsProps };