"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

const InputSearch: React.FC = () => {
    const searchRef = useRef();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value.trim();
        if (keyword) {
            router.push(`/search/${keyword}`);
        } else {
            router.push("/search");
        }
    };

    const handleSearchButtonMobile = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="relative w-full hidden md:block">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center w-[340px] justify-center"
                >
                    <input
                        type="text"
                        placeholder="Search anime or manga..."
                        className="py-2 px-4 w-full text-black rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-300"
                        ref={searchRef}
                    />
                    <button
                        type="submit"
                        className="absolute md:left-72 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-black transition duration-300"
                    >
                        <MagnifyingGlass size={24} />
                    </button>
                </form>
            </div>
            <Link href={`/search`} className="w-full flex justify-end md:hidden">
                <MagnifyingGlass size={24} onClick={handleSearchButtonMobile} />
            </Link>
        </>
    );
};

export default InputSearch;
