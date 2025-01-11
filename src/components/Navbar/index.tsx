import React from "react";
import Link from "next/link";
import InputSearch from "./inputSearch";
import UserAction from "./UserAction";
import ButtonNavbar from "./buttonNavbar";

const Navbar: React.FC = () => {
    return (
        <header className="bg-blue-800/70 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex flex-row justify-between items-center p-4 gap-4">
                <ButtonNavbar />
                <Link
                    href="/"
                    className="font-bold text-3xl text-white hover:text-gray-300 transition-colors duration-300"
                >
                    Kawaii<span className="text-pink-500 hover:text-gray-300 transition-colors duration-300">Anime</span>
                </Link>
                <InputSearch />
                <UserAction />
            </div>
        </header>
    );
};

export default Navbar;
