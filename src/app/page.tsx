import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/header";
import CollectionByGenre from "../components/AnimeList/collec-genre";
import { getAnime, getAnimeResponse, getAnimeResponseResource } from "./api/api";
import Footer from "../components/footer";

export default async function Page() {
  const topAnime = await getAnime("top/anime", "limit=12");
  const collecGenre = await getAnimeResponseResource("genres/anime");
  let recomenAnime = await getAnimeResponse("recommendations/anime", "entry");
  recomenAnime = {
    data: recomenAnime.sort(() => Math.random() - 0.5).slice(0, 12),
  };
  const topManga = await getAnime("top/manga", "filter=publishing");

  return (
    <>
      <div className="container mx-auto px-4 pb-[100px]">
        <section>
          <Header.TopTitleAnime title="Top Anime Populer" />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            <AnimeList.AnimeListHome api={topAnime} />
            <Header.LinkAnime linkTitle="View More" linkHref="/anime/populer" />
          </div>
        </section>
        <section className="my-8">
          <Header.TopTitleAnime title="Genre Pilihan" />
          <CollectionByGenre genres={collecGenre} />
        </section>
        <section>
          <Header.TopTitleAnime title="Rekomendasi" />
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            <AnimeList.AnimeListHome api={recomenAnime} />
            <Header.LinkAnime linkTitle="View More" linkHref="/anime/rekomendasi" />
          </div>
        </section>
        <section>
          <div className="mt-8 mb-3 flex justify-center">
            <Header.TopTitleAnime title="TOP MANGA POPULER" />
          </div>
          <div className="overflow-y-auto max-h-[600px] scrollbar-hide">
            <AnimeList.MangaListPages api={topManga} />
            <div className="py-4">
              <Header.LinkAnime linkTitle="View More" linkHref="/manga/populer" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
