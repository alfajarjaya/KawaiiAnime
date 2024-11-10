import Link from 'next/link';
import InputSearch from '@/components/Navbar/inputSearch';
import Image from 'next/image';
import logo from '../logo.webp';

const SearchPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-purple-600 p-4 text-white">
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
                    <InputSearch placeholder="Ketik nama anime..." />
                </div>

                <Link href="/" className="mt-8 text-sm font-semibold text-white hover:underline">
                    &larr; Kembali ke Halaman Utama
                </Link>
            </div>
        </>

    );
};

export default SearchPage;
