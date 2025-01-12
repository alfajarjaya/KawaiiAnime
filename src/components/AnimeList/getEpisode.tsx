import Link from "next/link";
import Header from "./header";
import { getAnimeResponseResource } from "../../app/api/api";

interface Genre {
    name: string;
    url: string;
}

interface Episode {
    mal_id: number;
    url: string;
}

interface AnimeData {
    genres: Genre[];
}

interface GetEpisodeAnimeResponse {
    data: Episode[];
}

interface GetAnimeResponse {
    data: AnimeData;
}

interface GetEpisodeProps {
    id: string;
}

const GetEpisode: React.FC<GetEpisodeProps> = async ({ id }) => {
    const getEpisodeAnime: GetEpisodeAnimeResponse = await getAnimeResponseResource(`anime/${id}/videos/episodes`);
    const anime: GetAnimeResponse = await getAnimeResponseResource(`anime/${id}`);

    return (
        <div className="text-lg text-gray-300 sm:w-2/3">
            <Header.TopTitleAnime title={"Genre"} />
            <div className="flex flex-wrap gap-2 mb-4">
                {anime.data?.genres.map((genre, index) => (
                    <Link
                        href={genre.url}
                        key={index}
                        className="text-xl bg-white text-black px-3 py-1 rounded-md shadow hover:bg-sky-500 hover:text-white transition ease-in-out delay-150 hover:translate-y-1"
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
            <Header.TopTitleAnime title={"Episode"} />
            <div className="flex flex-wrap gap-2 mb-4">
                {getEpisodeAnime.data?.slice().reverse().map((anime, index) => (
                    <Link
                        href={anime.url}
                        key={index}
                        className="text-xl bg-white text-black px-3 py-1 rounded-md shadow hover:bg-yellow-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1"
                    >
                        {anime.mal_id}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GetEpisode;
