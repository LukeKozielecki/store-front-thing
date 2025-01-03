import {FaFilter, FaPlus} from "react-icons/fa";
import React from "react";

const IconButton = ({ icon, label, bgColor, additionalClasses, onClick} : {icon : React.ReactNode, label: string, bgColor: string, additionalClasses : string | null, onClick?: () => void}) => {
    return (
        <button className={`btn ${bgColor} ${additionalClasses}`} onClick={onClick}>
            <span className="block 2xl:hidden">{icon}</span>
            <span className="hidden 2xl:inline">{label}</span>
        </button>
    );
};

const AuxFunctionButtons = ({ onAddProductClick }: {onAddProductClick : ()=>void}) => {
    return (
        <div className="flex items-center">
            <IconButton
                icon={<FaPlus className="inline" />}
                label="Add Product"
                bgColor="bg-blue-500"
                additionalClasses="mr-2"
                onClick={onAddProductClick}
            />
            <IconButton
                icon={<FaFilter className="inline" />}
                label="Filter Products"
                bgColor="bg-gray-300"
                additionalClasses=""
            />
        </div>
    );
};

export default AuxFunctionButtons;