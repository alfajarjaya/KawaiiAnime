"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnime } from "../../api/api";

interface AnimePagination {
    last_visible_page: number;
    current_page: number;
}

interface Manga {
    mal_id: number;
    title: string;
    image_url: string;
    [key: string]: any; // Tambahkan properti lain jika diperlukan
}

interface TopAnimeResponse {
    data: Manga[];
    pagination: AnimePagination;
}

const Page = () => {
    const [page, setPage] = useState<number>(1);
    const [topAnime, setTopAnime] = useState<TopAnimeResponse | null>(null);

    const fetchData = async () => {
        try {
            const populerAnime = await getAnime("top/manga", `page=${page}`);
            setTopAnime(populerAnime);
        } catch (err) {
            console.error("Error fetching top manga:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="container mx-auto px-4 h-dvh">
            <HeaderMenu
                title={`MANGA TERPOPULER`}
                page={`Page ${page}`}
                desc="Discover your favorite content"
            />
            {topAnime ? (
                <AnimeList.MangaListPages api={topAnime} />
            ) : (
                <div className="text-center py-10">Loading...</div>
            )}
            <Pagination
                page={page}
                lastPage={topAnime?.pagination?.last_visible_page || 1}
                setPage={setPage}
            />
        </div>
    );
};

export default Page;
