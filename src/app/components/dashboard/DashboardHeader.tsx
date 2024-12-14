'use client'

import React from "react";
import Link from "next/link";

const DashboardHeader = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-inherit">
            <ul className="flex items-center">
                <li className="text-blue-950 font-semibold mr-2 text-xl">
                    <Link href="" className="text-2xl">Dashboard</Link>
                </li>
            </ul>
            <Link
                href="/"
                className="flex items-center text-blue-950 hover:text-blue-600 transition duration-200"
            >
                <span className="ml-2 text-sm px-2 py-1 font-semibold rounded-2xl bg-green-200 text-green-700 hover:bg-green-300">Download Report</span>
            </Link>
        </div>
    );
};

export default DashboardHeader;