import React from "react";
import LoginWithGoogle from "@/app/(auth)/LoginWithGoogle";

export default function Login() {
    return (
        <div className="text-gray-700 flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-20">
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <h2 className="text-lg">Please authorise to use website</h2>
            </div>
            <div className="flex items-center justify-center">
                <LoginWithGoogle />
            </div>
        </div>
    );
}