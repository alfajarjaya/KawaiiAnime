import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/header";
import { getAnime } from "@/app/api/api";

export default async function Page({ params }) {

    const keyword = params.keyword
    const serachAnime = await getAnime('anime', `q=${keyword}`)
    const decodeKeyword = decodeURI(keyword)

    return (
        <>
            <div className="p-5">
                <section>
                    <div className="flex justify-center items-center mb-10">
                        <div className="text-center flex justify-center items-center custom-bg">
                            <Header.topTitleAnime title={`Pencarian untuk ${decodeKeyword}...`} />
                        </div>
                    </div>
                    <AnimeList.AnimeListPages api={serachAnime} />
                </section>
            </div>
        </>
    );
}
