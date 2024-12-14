'use client'

import React, { useState } from "react";
import { useDarkMode } from "@/app/components/DarkModeContext";
import { TfiAgenda, TfiClose  } from "react-icons/tfi";
import SidebarContent from "@/app/components/sidebar/SidebarContent";

const MobileSidebar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed bottom-8 right-8 p-3 text-2xl bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out z-50 block lg:hidden"
            >
                {isSidebarOpen ? <TfiClose/> : <TfiAgenda/>}
            </button>

            <section className={`fixed top-0 left-0 w-full h-screen max-w-md bg-gray-100 shadow-md transition-transform duration-300 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>

                <SidebarContent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </section>
        </>
    );
};

export default MobileSidebar;