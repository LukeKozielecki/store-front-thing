'use client'

import SidebarMenuItem from "@/app/components/sidebar/SidebarMenuItem";
import React from "react";
import Link from "next/link";
import {primaryMenuItems, utilityMenuItems} from "@/app/components/sidebar/menuItems";
import {BRAND_LOGO_URL} from "@/app/components/sidebar/brandingLogoUrls";
import Image from "next/image";

const Sidebar = () => {
    return (
        <section className="fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-md flex flex-col">
            {/* Brand Section */}
            <Link className="brand flex items-center text-blue-950 font-bold text-xl h-14 px-4 bg-light sticky top-0 z-50 mt-5" href="/">
                <Image
                    src={BRAND_LOGO_URL}
                    alt="Duality Of Cat Brand Logo"
                    className="mr-2 w-20 h-20 object-cover rounded-full"
                    width={80}
                    height={80}
                />
                <span>Duality of Cat</span>
            </Link>
            {/* Primary Menu Items */}
            <ul className="mt-12 flex-grow">
                {primaryMenuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <SidebarMenuItem itemTitle={item}/>
                    </li>
                ))}
            </ul>
            {/* Utility Menu Items */}
            <ul className="mt-auto">
                {utilityMenuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <SidebarMenuItem itemTitle={item}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Sidebar;