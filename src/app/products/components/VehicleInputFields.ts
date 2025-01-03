import {Vehicle, VehicleInputField} from "@/models/Vehicle";
import {RetailProductInputField} from "@/models/RetailProduct";

const vehicleInputFields = (vehicle: Vehicle, mileageInput: string) => [
    {
        name: 'brand',
        type: 'text',
        placeholder: 'Brand',
        value: vehicle.brand,
        hint: 'e.g., Toyota, Ford, Honda.',
    },
    {
        name: 'model',
        type: 'text',
        placeholder: 'Model',
        value: vehicle.model,
        hint: 'e.g., Corolla, Focus, Civic',
    },
    {
        name: 'name',
        type: 'text',
        placeholder: 'Product Name',
        value: vehicle.name,
        hint: 'Enter the name of the product.',
    },
    {
        name: 'price',
        type: 'number',
        placeholder: 'Price',
        value: vehicle.price.toString(),
        hint: 'Price of the product in USD.',
    },
    {
        name: 'category',
        type: 'text',
        placeholder: 'Category',
        value: vehicle.category,
        hint: 'Category of the product, e.g., automotive, electronics.',
    },
    {
        name: 'description',
        type: 'textarea',
        placeholder: 'Description',
        value: vehicle.description,
        hint: 'Details about the product.',
    },
    {
        name: 'stockQuantity',
        type: 'number',
        placeholder: 'Stock Quantity',
        value: vehicle.stockQuantity.toString(),
        hint: 'Number of items in stock.',
    },
    {
        name: 'supplier',
        type: 'text',
        placeholder: 'Supplier',
        value: vehicle.supplier,
        hint: 'Supplier of the product.',
    },
];

const vehicleInputFieldsGeneric: RetailProductInputField[] = [
    {
        name: 'brand',
        type: 'text',
        placeholder: 'Brand',
        value: ' ',
        hint: 'e.g., Toyota, Ford, Honda.',
    },
    {
        name: 'model',
        type: 'text',
        placeholder: 'Model',
        value: ' ',
        hint: 'e.g., Corolla, Focus, Civic',
    },
    {
        name: 'name',
        type: 'text',
        placeholder: 'Product Name',
        value: ' ',
        hint: 'Enter the name of the product.',
    },
    {
        name: 'price',
        type: 'number',
        placeholder: 'Price',
        value: ' ',
        hint: 'Price of the product in USD.',
    },
    {
        name: 'category',
        type: 'text',
        placeholder: 'Category',
        value: ' ',
        hint: 'Category of the product, e.g., automotive, electronics.',
    },
    {
        name: 'description',
        type: 'textarea',
        placeholder: 'Description',
        value: ' ',
        hint: 'Details about the product.',
    },
    {
        name: 'stockQuantity',
        type: 'number',
        placeholder: 'Stock Quantity',
        value: ' ',
        hint: 'Number of items in stock.',
    },
    {
        name: 'supplier',
        type: 'text',
        placeholder: 'Supplier',
        value: ' ',
        hint: 'Supplier of the product.',
    },
];

export {vehicleInputFields, vehicleInputFieldsGeneric};