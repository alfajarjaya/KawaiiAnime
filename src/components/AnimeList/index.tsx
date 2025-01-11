import Image from "next/image";
import Link from "next/link";

interface Anime {
    mal_id: number;
    title: string;
    images: {
        webp: {
            image_url: string;
        };
    };
    url?: string; // Untuk MangaListPages
}

interface ApiResponse {
    data: Anime[];
}

interface AnimeListProps {
    api: ApiResponse;
}

const AnimeListHome: React.FC<AnimeListProps> = ({ api }) => {
    return (
        <section>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
                {api.data?.map((anime, index) => (
                    <div
                        key={index}
                        className="bg-white/10 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg cursor-pointer min-w-[200px] p-4 flex flex-col items-center"
                    >
                        <Link
                            href={`/anime/${anime.mal_id}`}
                            className="flex flex-row items-end justify-center text-center"
                        >
                            <h3
                                className="font-bold text-md text-white rotate-180"
                                style={{
                                    writingMode: "vertical-rl",
                                }}
                            >
                                {anime.title.length > 30 ? anime.title.slice(0, 20) + "..." : anime.title}
                            </h3>
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={150}
                                height={150}
                                className="rounded-md img"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AnimeListPages: React.FC<AnimeListProps> = ({ api }) => {
    return (
        <section>
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                {api.data?.map((anime, index) => (
                    <div key={index} className="shadow-lg cursor-pointer">
                        <Link href={`/anime/${anime.mal_id}`} className="text-white hover:text-yellow-300">
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={250}
                                height={250}
                                className="rounded-md img"
                            />
                            <h3 className="font-bold md:text-l text-md p-4">{anime.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

const MangaListPages: React.FC<AnimeListProps> = ({ api }) => {
    return (
        <section>
            <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                {api.data?.map((anime, index) => (
                    <div key={index} className="shadow-lg cursor-pointer">
                        <Link href={anime.url || "#"} className="text-white hover:text-yellow-300">
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={250}
                                height={250}
                                className="rounded-md img"
                            />
                            <h3 className="font-bold md:text-l text-md p-4">{anime.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AnimeList = {
    AnimeListHome,
    AnimeListPages,
    MangaListPages,
};

export default AnimeList;
