import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnime, getAnimeResponse, getAnimeResponseRecource } from "./api/api";
import CollectionByGenre from "@/components/AnimeList/collec-genre";

export default async function Page() {

  const topAnime = await getAnime('top/anime', 'limit=12')
  const collecGenre = await getAnimeResponseRecource('genres/anime')
  let recomenAnime = await getAnimeResponse('recommendations/anime', 'entry')
  recomenAnime = {
    data: recomenAnime.sort(() => Math.random() - 0.5).slice(0, 12)
  }

  // const topManga = await getAnime('top/manga', 'filter=publishing')

  return (
    <>
      <div className="container mx-auto px-4">
        <section>
          <Header.topTitleAnime title="Top Anime Populer" />
          <AnimeList.AnimeListHome api={topAnime} />
          <div className="py-4">
            <Header.linkAnime linkTitle="Lihat semua..." linkHref="/anime/populer" />
          </div>
        </section>
        <section className="my-8">
          <Header.topTitleAnime title="Genre Pilihan" />
          <CollectionByGenre genres={collecGenre} />
        </section>
        <section>
          <Header.topTitleAnime title="Rekomendasi" />
          <AnimeList.AnimeListHome api={recomenAnime} />
          <div className="py-4">
            <Header.linkAnime linkTitle="Lihat semua..." linkHref="/anime/rekomendasi" />
          </div>
        </section>
        {/* <section>
          <Header.topTitleAnime title="TOP MANGA POPULER" />
          <AnimeList.AnimeListHome api={topManga} />
          <div className="py-4">
            <Header.linkAnime linkTitle="Lihat semua..." linkHref="/populer" />
          </div>
        </section> */}
      </div>
    </>
  );
}
