import Link from "next/link";
import InputSearch from "@/components/Navbar/inputSearch";
import Image from "next/image";
import logo from "../logo.webp";

const SearchPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-purple-800 to-pink-700 p-6 text-white">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-10 space-y-4">
                <div className="relative">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={140}
                        height={140}
                        className="rounded-full shadow-2xl transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-yellow-400 border-2 border-white shadow-md animate-ping" />
                </div>
                <h1 className="mt-6 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500 drop-shadow-xl">
                    Temukan Anime Favorit
                </h1>
                <p className="mt-4 text-lg max-w-md text-gray-200 leading-relaxed">
                    Jelajahi anime terbaik berdasarkan rekomendasi atau cari anime yang kamu inginkan dengan mudah.
                </p>
            </div>

            {/* Search Input */}
            <div className="w-full max-w-lg relative mb-8">
                <InputSearch placeholder="Cari anime favorit..." />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-purple-300 hover:border-yellow-300 transition duration-300" />
            </div>

            {/* Decorative Divider */}
            <div className="my-8 w-20 h-1 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-full"></div>

            {/* Back to Home Link */}
            <Link
                href="/"
                className="mt-8 text-lg font-semibold text-yellow-300 bg-purple-900 py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
                &larr; Kembali ke Halaman Utama
            </Link>
        </div>
    );
};

export default SearchPage;
