import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import {auth} from "../../../../firebaseConfig";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setChecking(false);
        }, (error) => {
            console.error("Error observing auth state:", error);
        });

        return () => unsubscribe();
    }, []);

    return { user, checking };
};

export default useAuth;