"use client"

import Image from 'next/image';
import logo from './logo.webp'
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-pink-500 text-white">
            <Image
                src={logo}
                alt="Logo"
                width={150}
                height={150}
                className="mb-8"
            />
            <h1 className="md:text-4xl font-bold mb-4 text-xl">404 - Halaman Tidak Ditemukan</h1>
            <p className="text-lg text-center mb-8">
                Maaf, halaman yang kamu cari tidak ditemukan. <br />
                Mungkin kamu tersesat di dunia anime yang luas!
            </p>
            <button onClick={() => router.back()} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                Kembali ke Halaman Sebelumnya
            </button>
        </div>
    );
}

export default NotFound;
