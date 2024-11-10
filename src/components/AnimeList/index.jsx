import Image from "next/image";
import Link from "next/link";

const AnimeListHome = ({ api }) => {
    return (
        <section>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide p-4">
                {api.data?.map((anime, index) => (
                    <div key={index} className="shadow-lg cursor-pointer min-w-[200px]">
                        <Link href={`/anime/${anime.mal_id}`} className="text-white hover:text-yellow-300">
                            <Image
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                width={200}
                                height={300}
                                className="rounded-md img"
                            />
                            <h3 className="font-bold md:text-l text-md p-2">{anime.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AnimeListPages = ({ api }) => {
    return (
        <>
            <section>
                <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                    {api.data?.map((anime, index) => (
                        <div key={index} className="shadow-lg cursor-pointer">
                            <Link href={`/anime/${anime.mal_id}`} className=" text-white hover:text-yellow-300">
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
            </section >
        </>
    );
};

const AnimeList = {
    AnimeListHome: AnimeListHome,
    AnimeListPages: AnimeListPages
}

export default AnimeList;