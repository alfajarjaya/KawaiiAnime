"use client";

import React, { useEffect, useState } from "react";
import { List, ArrowArcLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { DiscordLogo } from "@phosphor-icons/react/dist/ssr";

const ButtonNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="text-white font-bold py-2 px-4 rounded hover:bg-opacity-30"
            >
                <List size={32} />
            </button>

            <div
                className={`fixed top-0 left-0 w-48 md:w-64 bg-gray-800 bg-opacity-80 backdrop-blur-xl min-h-screen text-white shadow-lg transform ${isOpen ? "translate-x-0 z-[110]" : "-translate-x-full"
                    } transition-transform duration-300 all border-r-[1px] border-white/50`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 left-10 hover:text-white cursor-pointer flex items-center justify-start gap-x-3"
                >
                    <ArrowArcLeft size={32} /> Close menu
                </button>

                <nav className="mt-20">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/" className="block mx-4 py-2 flex items-center justify-center gap-x-5 text-center bg-blue-800 bg-opacity-70 hover:bg-gray-700 rounded-full hover:bg-opacity-50">
                                <DiscordLogo size={20} />Community
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block p-4 hover:bg-gray-700 hover:bg-opacity-50 border-b-[1px] border-gray-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/anime/populer" className="block p-4 hover:bg-gray-700 hover:bg-opacity-50 border-b-[1px] border-gray-500">
                                Most Popular
                            </Link>
                        </li>
                        <li>
                            <Link href="/anime/rekomendasi" className="block p-4 hover:bg-gray-700 hover:bg-opacity-50 border-b-[1px] border-gray-500">
                                Recommendations
                            </Link>
                        </li>
                        <li>
                            <Link href="/manga/populer" className="block p-4 hover:bg-gray-700 hover:bg-opacity-50 border-b-[1px] border-gray-500">
                                Manga
                            </Link>
                        </li>
                        <li>
                            <Link href="/characters" className="block p-4 hover:bg-gray-700 hover:bg-opacity-50 border-b-[1px] border-gray-500">
                                Character
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-gray-900 opacity-70 backdrop-blur-xl z-[100] min-h-screen min-w-screen"
                ></div>
            )}
        </>
    );
};

export default ButtonNavbar;
