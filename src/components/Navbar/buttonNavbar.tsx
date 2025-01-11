"use client";

import React, { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";

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
                    className="absolute top-4 right-4 hover:text-white cursor-pointer"
                >
                    <X size={32} />
                </button>

                <nav className="mt-20">
                    <ul className="space-y-4">
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-700 rounded hover:bg-opacity-50">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-700 rounded hover:bg-opacity-50">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-700 rounded hover:bg-opacity-50">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-700 rounded hover:bg-opacity-50">
                                Contact
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
