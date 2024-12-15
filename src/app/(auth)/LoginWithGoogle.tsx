'use client'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {auth} from "../../../firebaseConfig";
import {FaGoogle} from 'react-icons/fa';
import React from "react";
import useAuth from "@/app/utils/hooks/useAuth";
import useRedirectTo from "@/app/utils/hooks/useRedirectTo";

export default function LoginWithGoogle() {
    const { user } = useAuth();
    const redirectTo = "/"

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    useRedirectTo(user, redirectTo)

    return (
        <>
            <button
                className="flex flex-col items-center justify-center bg-gray-300 text-white w-32 h-32 rounded-lg hover:bg-coffee-600 transition duration-200"
                onClick={handleGoogle}
            >
                <FaGoogle className="mt-2 text-3xl"/>
                <span className="text-sm">Sign in with Google</span>
            </button>
        </>
    );
}