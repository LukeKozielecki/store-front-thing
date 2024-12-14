import BrandComponent from "@/app/components/sidebar/BrandComponent";
import SearchInput from "@/app/components/sidebar/SearchInput";
import SidebarMenu from "@/app/components/sidebar/SidebarMenu";
import {primaryMenuItems, utilityMenuItems} from "@/app/components/sidebar/menuItems";
import ThemeToggle from "@/app/components/sidebar/ThemeToggle";
import NotificationIcon from "@/app/components/sidebar/NotificationIcon";
import React from "react";

const SidebarContent = ({ isDarkMode, toggleDarkMode } : { isDarkMode : boolean, toggleDarkMode : () => void }) => {
    return (
        <>
            <BrandComponent/>
            <SearchInput/>
            <ul>
                <SidebarMenu items={primaryMenuItems}/>
            </ul>
            <div className="mt-auto p-4 flex justify-between items-center">
                <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <NotificationIcon/>
            </div>
            <ul className="mt-4">
                <SidebarMenu items={utilityMenuItems}/>
            </ul>
        </>
    );
};

export default SidebarContent;