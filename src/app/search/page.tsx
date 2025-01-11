"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../logo.webp";

const SearchPage = () => {
    // Referensi input untuk kata kunci pencarian
    const searchRef = useRef < HTMLInputElement > (null);
    const router = useRouter();

    // Fungsi untuk menangani pencarian
    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        const keyword = searchRef.current?.value.trim();
        if (keyword) {
            router.push(`/search/${keyword}`);
        } else {
            router.push("/search");
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
                <div className="flex flex-col items-center text-center mb-8">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={120}
                        className="mb-4"
                    />
                    <h1 className="text-4xl font-bold mb-2">Cari Anime Favorit Anda</h1>
                    <p className="text-lg max-w-md">
                        Temukan anime terbaik yang sedang trending atau berdasarkan kata kunci yang kamu masukkan.
                    </p>
                </div>

                <div className="w-full max-w-md">
                    <div className="relative w-full">
                        <form
                            onSubmit={handleSearch}
                            className="flex justify-center items-center w-full bg-white rounded-lg"
                        >
                            <input
                                type="text"
                                placeholder="Search anime or manga..."
                                className="py-2 px-4 w-full text-black rounded-lg bg-transparent bg-none border-0 focus:outline-none focus:ring-0"
                                ref={searchRef}
                            />
                            <button
                                type="submit"
                                className="p-1 text-gray-500 hover:text-black transition duration-300"
                            >
                                <MagnifyingGlass size={24} />
                            </button>
                        </form>
                    </div>
                </div>

                <Link href="/" className="mt-8 text-sm font-semibold text-white hover:underline">
                    &larr; Kembali ke Halaman Utama
                </Link>
            </div>
        </>
    );
};

export default SearchPage;
