"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnime } from "../../api/api";

const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState({});

    const fetchData = async () => {
        try {
            const populerAnime = await getAnime('top/anime', `page=${page}`)
            setTopAnime(populerAnime);
        } catch (err) {
            //pass
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="container mx-auto px-4 h-dvh">
            <HeaderMenu title={`ANIME TERPOPULER`} page={`Page ${page}`} desc="Discover your favorite content" />
            <AnimeList.AnimeListPages api={topAnime} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
        </div>
    );
};

export default Page;
