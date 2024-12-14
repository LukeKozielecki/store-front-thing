import Link from "next/link";
import Image from "next/image";
import { BRAND_LOGO_URL } from "@/app/components/sidebar/brandingLogoUrls";
import {useState} from "react";

const Brand = () => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <Link
            className="brand flex items-center text-blue-950 font-bold text-xl h-14 px-4 bg-light sticky top-0 z-50 mt-5"
            href="/"
            onClick={() => { alert("Dark side is strong in this one"); }}
        >
            {loading && (
                <div
                    className="mr-2 w-20 h-20 rounded-full bg-gray-300"
                ></div>
            )}
            <Image
                src={BRAND_LOGO_URL}
                alt="Duality Of Cat Brand Logo"
                className={`mr-2 w-20 h-20 object-cover rounded-full ${loading ? 'hidden' : ''}`}
                width={80}
                height={80}
                onLoad={handleImageLoad}
            />
            <span>Duality of Cat</span>
        </Link>
    );
}

export default Brand;