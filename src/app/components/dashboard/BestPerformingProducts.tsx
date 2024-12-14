'use client'
import React from 'react';
import {FaEdit, FaFilter, FaPlus} from 'react-icons/fa';
import '../../../styles/productList.css';

export interface BestPerformingProduct {
    name: string;
    sales: number;
}

export interface BestPerformingProductsProps {
    products: BestPerformingProduct[];
}

const ConditionalAddFilterUi = () => {
    return (
        <div className="flex items-center ">
            <button className="btn bg-blue-500 mr-2">
                <span className="block 2xl:hidden">
                    <FaPlus className="inline"/>
                </span>
                <span className="hidden 2xl:inline">Add Product</span>
            </button>
            <button className="btn bg-gray-300">
                <span className="block 2xl:hidden">
                    <FaFilter className="inline"/>
                </span>
                <span className="hidden 2xl:inline">Filter Products</span>
            </button>
        </div>
    );
};

const BestPerformingProducts: React.FC<BestPerformingProductsProps> = ({products}) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mt-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-900">Best Performing Products</h1>
                <div className="mx-1"/>
                <div>
                    <ConditionalAddFilterUi/>
                </div>
            </div>
            <ul className="space-y-4">
                {products.map((product, index) => (
                    <li key={index} className="product-item">
                        <div className="product-info">
                            <h4 className="text-lg text-gray-700 font-medium">{product.name}</h4>
                            <p className="text-gray-600">Total Sales: {product.sales}</p>
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

export default BestPerformingProducts;