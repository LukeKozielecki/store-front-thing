import { useEffect, useState } from 'react';
import {auth} from "../../firebaseConfig";

const useAuthUser = () => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUserId(currentUser.uid);
            } else {
                setUserId(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return userId;
};

export default useAuthUser;