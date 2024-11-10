"use client";

import React, { useState, useEffect } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponseRecource } from "@/app/api/api";

const Page = () => {
    const [page, setPage] = useState(1);
    const [recommendAnime, setRecommendAnime] = useState([]);
    const [lastPage, setLastPage] = useState(null);

    const fetchData = async () => {
        try {
            const recomAnime = await getAnimeResponseRecource(`recommendations/anime`);
            const randomizedAnime = {
                data: recomAnime.data.flatMap((item) => item.entry),
            }
            setRecommendAnime(randomizedAnime || []);
            setLastPage(recomAnime.pagination?.last_visible_page ?? 1);
        } catch (err) {
            console.error("Failed to fetch data:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div className="container mx-auto px-4 h-dvh">
            <HeaderMenu title="Recommended" page={`Page ${page}`} desc="Discover your favorite content" />
            <AnimeList.AnimeListPages api={recommendAnime} />
            <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </div>
    );
};

export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import HeaderMenu from "@/components/utilities/HeaderMenu";
// import Pagination from "@/components/utilities/Pagination";
// import AnimeList from "@/components/AnimeList";
// import { getAnimeResponse, getAnimeResponseRecommend } from "@/app/api/api";

// const Page = () => {
//     const [page, setPage] = useState(1);
//     const [recommendAnime, setRecommendAnime] = useState([]);
//     const [lastPage, setLastPage] = useState(null);

//     const fetchData = async () => {
//         try {
//             const recomAnime = await getAnimeResponseRecommend(`recommendations/anime?page=${page}`);
//             let randomizedAnime = await getAnimeResponse('recommendations/anime', 'entry')
//             randomizedAnime = {
//                 data:randomizedAnime
//             }
//             console.log(randomizedAnime)
//             setRecommendAnime(randomizedAnime);
//             setLastPage(recomAnime.pagination?.last_visible_page ?? 1);
//         } catch (err) {
//             // pass
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [page]);

//     return (
//         <div className="container mx-auto px-4 h-dvh">
//             <HeaderMenu title="ANIME TERPOPULER" page={`Page ${page}`} desc="Discover your favorite content" />
//             <AnimeList.AnimeListPages api={recommendAnime} />
//             <Pagination page={page} lastPage={lastPage} setPage={setPage} />
//         </div>
//     );
// };

// export default Page;
