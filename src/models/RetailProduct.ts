interface RetailProduct {
    owner_id: string;
    name: string;
    product_uuid: string;
    sales: number;
    price: number;
    category: string;
    description: string;
    stockQuantity: number;
    supplier: string;
    ratings: number;
    imageUrl?: string[];
}

interface RetailProductInputField {
    name: string;
    type: string;
    placeholder: string;
    hint: string,
    value: string;
}

interface RetailProductProps {
    products: RetailProduct[];
    toggleOverlay : () => void
}

export type { RetailProduct, RetailProductProps, RetailProductInputField };