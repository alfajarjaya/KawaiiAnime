import AnimeList from "../../../components/AnimeList";
import Header from "../../../components/AnimeList/header";
import { getAnime } from "../../api/api";

interface PageProps {
    params: {
        keyword: string;
    };
}

export default async function Page({ params }: PageProps) {
    const keyword = params.keyword;
    const searchAnime = await getAnime("anime", `q=${keyword}`);
    const searchManga = await getAnime("manga", `q=${keyword}`);
    const decodeKeyword = decodeURI(keyword);

    return (
        <div className="p-5">
            <section className="container mx-auto">
                <div className="flex justify-center items-center mb-10">
                    <div className="text-center flex justify-center items-center custom-bg">
                        <Header.TopTitleAnime title={`Pencarian untuk ${decodeKeyword}...`} />
                    </div>
                </div>
                <div>
                    <Header.TopTitleAnime title="Kategori Anime" />
                    <div className="my-8">
                        <AnimeList.MangaListPages api={searchAnime} />
                    </div>
                </div>
                <div>
                    <Header.TopTitleAnime title="Kategori Manga" />
                    <div className="my-8">
                        <AnimeList.MangaListPages api={searchManga} />
                    </div>
                </div>
            </section>
        </div>
    );
}
