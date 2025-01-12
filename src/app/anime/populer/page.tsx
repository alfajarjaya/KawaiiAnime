"use client";

import React, { useState, useEffect } from "react";
import { getAnime } from "../../api/api";
import HeaderMenu from "../../../components/utilities/HeaderMenu";
import AnimeList from "../../../components/AnimeList";
import Pagination from "../../../components/utilities/Pagination";

interface Anime {
    mal_id: number;
    title: string;
    image_url: string;
    [key: string]: any; 
}

interface AnimeResponse {
    data: Anime[];
    pagination?: {
        last_visible_page: number;
        current_page: number;
        [key: string]: any;
    };
}

const Page: React.FC = () => {
    const [page, setPage] = useState <number> (1);
    const [topAnime, setTopAnime] = useState <AnimeResponse | null> (null);

    const fetchData = async () => {
        try {
            const populerAnime: AnimeResponse = await getAnime("top/anime", `page=${page}`);
            setTopAnime(populerAnime);
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
                title={`ANIME TERPOPULER`}
                page={`Page ${page}`}
                desc="Discover your favorite content"
            />
            {topAnime && <AnimeList.AnimeListPages api={topAnime.data} />}
            <Pagination
                page={page}
                lastPage={topAnime?.pagination?.last_visible_page || 1}
                setPage={setPage}
            />
        </div>
    );
};

export default Page;
