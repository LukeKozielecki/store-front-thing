'use client'

import React from 'react';
import Link from "next/link";

interface SidebarMenuItemProps {
    itemTitle: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ itemTitle }) => {
    return (
        <div className="flex items-center h-12 px-4 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <Link className="flex-grow text-gray-700 hover:text-blue-600" href="/">{itemTitle}</Link>
        </div>
    );
};

export default SidebarMenuItem;