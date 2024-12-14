import Link from "next/link";
import { FaBell } from 'react-icons/fa';

const NotificationIcon = () => {
    const notificationCount = 1;

    return (
        <Link href="/public" className="notification flex items-center text-gray-600 relative">
            <FaBell size={24} className="cursor-pointer" />
            {notificationCount > 0 && (
                <span className="num absolute right-0 top-0 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs px-1">
                    {notificationCount}
                </span>
            )}
        </Link>
    );
}

export default NotificationIcon;