import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {User} from "firebase/auth";

const useAuthRedirect = (checking: boolean, user: User | null) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!checking) {
            if (user === null && pathname !== '/login') {
                router.push('/login');
            }
        }
    }, [checking, pathname, router, user]);
};

export default useAuthRedirect;