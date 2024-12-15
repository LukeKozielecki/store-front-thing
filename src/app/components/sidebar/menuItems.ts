import {auth} from "../../../../firebaseConfig";

export interface MenuItem {
    label: string;
    action?: () => string | Promise<void>;
}

export const primaryMenuItems: MenuItem[] = [
    { label: "Dashboard", action: () => "/dashboard" },
    { label: "Orders", action: () => "/orders" },
    { label: "Products", action: () => "/products" },
    { label: "Customers", action: () => "/customers" },
    { label: "Analytics", action: () => "/analytics" }
];

export const utilityMenuItems: MenuItem[] = [
    { label: "Settings", action: () => "/settings" },
    { label: "Log Out", action: () => auth.signOut() }
];