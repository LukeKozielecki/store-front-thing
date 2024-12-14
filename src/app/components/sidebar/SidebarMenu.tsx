import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = ({ items } : {items : string[]}) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className="mb-2">
                    <SidebarMenuItem itemTitle={item} />
                </li>
            ))}
        </>
    );
}

export default SidebarMenu;