import Image from "next/image";
import Link from "next/link";
import prisma from "../../../../libs/prisma";
import { authUserSession } from "../../../../libs/auth-libs";
import Header from "../../../../components/dashboard/header";

// Tipe untuk data pengguna
type User = {
    email: string;
};

// Tipe untuk data koleksi
type Collection = {
    anime_mal_id: string;
    anime_img: string;
    anime_title: string;
};

const Page = async (): Promise<JSX.Element> => {
    const user: User = await authUserSession();
    const collection: Collection[] = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <section className="mt-8 container mx-auto px-4 w-full min-h-screen">
            <Header title="My Collection" />
            {collection.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20">
                    <h2 className="text-2xl font-semibold text-gray-600">No anime in your collection yet!</h2>
                    <Link
                        href="/search"
                        className="mt-4 bg-yellow-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
                    >
                        Explore Anime
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                    {collection.map((collect) => (
                        <Link
                            key={collect.anime_mal_id}
                            href={`/anime/${collect.anime_mal_id}`}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <Image
                                src={collect.anime_img}
                                alt={collect.anime_title}
                                width={350}
                                height={350}
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                <h5 className="text-white text-lg font-semibold truncate">
                                    {collect.anime_title}
                                </h5>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Page;
