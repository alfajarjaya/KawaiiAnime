"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponseResource } from "@/app/api/api";

// Definisi tipe data untuk rekomendasi anime
interface AnimeEntry {
    mal_id: number;
    title: string;
    image_url: string;
    [key: string]: any; // Tambahkan properti lain jika diperlukan
}

interface RecommendationResponse {
    data: {
        entry: AnimeEntry[];
    }[];
    pagination?: {
        last_visible_page: number;
    };
}

const Page: React.FC = () => {
    const [page, setPage] = useState < number > (1);
    const [recommendAnime, setRecommendAnime] = useState < AnimeEntry[] > ([]);
    const [lastPage, setLastPage] = useState < number | null > (null);

    const fetchData = async () => {
        try {
            const recomAnime: RecommendationResponse = await getAnimeResponseResource < RecommendationResponse > (
                `recommendations/anime`
            );

            // Meratakan data rekomendasi anime
            const randomizedAnime = recomAnime.data.flatMap((item) => item.entry);

            setRecommendAnime(randomizedAnime || []);
            setLastPage(recomAnime.pagination?.last_visible_page ?? 1);
        } catch (err) {
            // pass
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="container mx-auto px-4 h-dvh">
            <HeaderMenu
                title="Recommended"
                page={`Page ${page}`}
                desc="Discover your favorite content"
            />
            <AnimeList.AnimeListPages api={recommendAnime} />
            <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </div>
    );
};

export default Page;
