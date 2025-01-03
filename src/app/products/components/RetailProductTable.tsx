import {FaEdit} from "react-icons/fa";
import React from "react";
import {RetailProductProps} from "@/models/RetailProduct";
import '@/styles/productList.css';
import AuxFunctionButtons from "@/app/products/components/AuxFunctionButtons";

const RetailProductTable: React.FC<RetailProductProps> = ({products, toggleOverlay}) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mt-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-900">Retail Products</h1>
                <div className="mx-1"/>
                <div>
                    <AuxFunctionButtons onAddProductClick={toggleOverlay}/>
                </div>
            </div>
            <ul className="space-y-4">
                {products.map((product, index) => (
                    <li key={index} className="product-item">
                        <div className="product-info">
                            <h4 className="text-lg text-gray-700 font-medium">{product.name}</h4>
                            <p className="text-gray-600">Total Sales: {product.sales}</p>
                            <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                            <p className="text-gray-600">Category: {product.category}</p>
                            <p className="text-gray-600">Stock Quantity: {product.stockQuantity}</p>
                            <p className="text-gray-600">Ratings: {product.ratings} stars</p>
                            {product.description && (
                                <p className="text-gray-600">Description: {product.description}</p>
                            )}
                        </div>
                        <button className="btn p-2 text-gray-600 hover:text-gray-800">
                            <FaEdit/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RetailProductTable;