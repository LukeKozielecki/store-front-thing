import SidebarMenuItem from "./SidebarMenuItem";
import {MenuItem} from "@/app/components/sidebar/menuItems";
import {useRouter} from "next/navigation";

const SidebarMenu = ({ items }: { items: MenuItem[] }) => {

    const router = useRouter();

    const handleItemClick = async (item: MenuItem) => {
        if (typeof item.action === 'function') {
            const result = await item.action();
            if (typeof result === 'string') {
                router.push(result);
            }
        }
    };

    return (
        <>
            {items.map((item, index) => (
                <li key={index} className="mb-2">
                    <SidebarMenuItem
                        itemTitle={item.label}
                        onClick={() => handleItemClick(item)}
                    />
                </li>
            ))}
        </>
    );
};

export default SidebarMenu;