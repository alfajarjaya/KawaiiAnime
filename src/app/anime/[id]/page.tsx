import Image from "next/image";
import { getAnime } from "../../api/api";
import { authUserSession } from "../../../libs/auth-libs";
import CollectionButton from "../../../components/AnimeList/collection-button";
import GetEpisode from "../../../components/AnimeList/getEpisode";
import CommentInput from "../../../components/AnimeList/comment-input";
import CommentBox from "../../../components/AnimeList/commentBox";
import VideoPlayer from "../../../components/utilities/videoPlayer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AnimeData {
    title: string;
    year: number;
    rank: number;
    score: number;
    popularity: number;
    synopsis: string;
    images: {
        webp: { image_url: string };
        jpg: { image_url: string };
    };
    trailer: { youtube_id: string | null };
}

interface AnimeResponse {
    data: AnimeData;
}

interface UserSession {
    email: string;
    name: string;
}

interface PageParams {
    params: { id: string };
}

const Page = async ({ params: { id } }: PageParams) => {
    const anime: AnimeResponse = await getAnime(`anime/${id}`);
    const user: UserSession | null = await authUserSession();
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id },
    });

    return (
        <div className="h-dvh text-white bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <h3 className="text-center my-8 font-bold text-5xl text-yellow-400 shadow-lg">
                    {anime.data.title} <span className="text-gray-300">- {anime.data.year}</span>
                </h3>

                {!collection && user && (
                    <div className="text-center mb-6">
                        <CollectionButton
                            anime_mal_id={id}
                            anime_title={anime.data.title}
                            anime_img={anime.data.images.webp.image_url}
                            user_email={user?.email}
                        />
                    </div>
                )}

                <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
                    <Image
                        src={anime.data.images.webp.image_url}
                        alt={anime.data.images.jpg.image_url}
                        width={300}
                        height={450}
                        className="w-full sm:w-auto rounded-xl shadow-lg object-cover transition-transform transform hover:scale-105"
                    />
                    <div className="text-lg text-gray-300 sm:w-2/3">
                        <p className="text-justify">{anime.data.synopsis}</p>
                    </div>
                </div>

                <div>
                    <GetEpisode id={id} />
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-yellow-400 font-semibold">PERINGKAT</h3>
                        <p className="text-2xl">{anime.data.rank}</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-yellow-400 font-semibold">SKOR</h3>
                        <p className="text-2xl">{anime.data.score}</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-yellow-400 font-semibold">POPULARITAS</h3>
                        <p className="text-2xl">{anime.data.popularity}</p>
                    </div>
                </div>

                <div className="py-8">
                    {user && (
                        <CommentInput
                            anime_mal_id={id}
                            anime_title={anime.data.title}
                            user_email={user?.email}
                            username={user?.name}
                        />
                    )}
                    <CommentBox anime_mal_id={id} />
                </div>

                {anime.data.trailer.youtube_id && (
                    <div className="py-8 flex justify-center">
                        <VideoPlayer
                            videoId={anime.data.trailer.youtube_id}
                            className="rounded-lg overflow-hidden shadow-xl w-full sm:w-3/4"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
