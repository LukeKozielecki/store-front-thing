'use client'

import React from "react";
import {useDarkMode} from "@/app/components/DarkModeContext";
import SidebarContent from "@/app/components/sidebar/SidebarContent";

const DesktopSidebar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <section className="fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-md flex flex-col">
            <SidebarContent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        </section>
    );
};

export default DesktopSidebar;