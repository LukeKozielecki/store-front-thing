import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {User} from "firebase/auth";

const useRedirectTo = (user : User | null, route : string = "/") => {
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push(route);
        }
    }, [user, route, router]);
};

export default useRedirectTo;