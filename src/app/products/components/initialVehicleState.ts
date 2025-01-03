import {Vehicle} from "@/models/Vehicle";

const InitialVehicleState = (): Vehicle => ({
    name: '',
    owner_id:'',
    product_uuid: '',
    sales: 0,
    price: 0,
    category: '',
    description: '',
    stockQuantity: 0,
    supplier: '',
    ratings: 0,
    imageUrl: [],
    manufactured_at: '',
    brand: '',
    model: '',
    mileage_km: 0,
    vin: '',
    condition: '',
    receipts: []
});

export default InitialVehicleState;