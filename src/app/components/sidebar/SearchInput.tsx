'use client'

import React from "react";
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    return (
        <form action="#" className="m-4 flex items-center">
            <div className="relative flex-grow">
                <input
                    type="search"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg p-2 dark:bg-gray-200 dark:text-white w-full"
                />
                <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2">
                    <FaSearch size={16} className="cursor-pointer"/>
                </button>
            </div>
        </form>
    );
}

export default SearchInput;