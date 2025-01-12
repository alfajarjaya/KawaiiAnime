'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Pagination from '../utilities/Pagination';
import { getCharacterAnime } from '../../app/api/api';

interface CharProps {
    api: {
        pagination: {
            last_visible_page: number;
            current_page: number;
        },
        data: {
            mal_id: number,
            images: {
                jpg: {
                    image_url: string;
                };
            };
            name: string;
        }[];
    };
}

const ImageUI: React.FC<CharProps> = ({ api }) => {
    const [page, setPage] = useState<number>(1);
    const [pagination, setPagination] = useState(api.pagination);
    const [characterData, setCharacterData] = useState(api.data);

    const fetchData = async () => {
        try {
            const response = await getCharacterAnime('characters', `page=${page}`);
            if (response?.pagination && response?.data) {
                setPagination(response.pagination);
                setCharacterData(response.data);
            } else {
                // pass
            }
        } catch (error) {
            // pass
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg">
                {characterData.map((character) => (
                    <div
                        key={character.mal_id}
                        className="relative overflow-hidden rounded-md border-2 border-cyan-400"
                    >
                        <Link href={`/characters/pic/${character.mal_id}`}>
                            <Image
                                src={character.images?.jpg.image_url}
                                alt={character.name}
                                className="object-cover w-full h-full"
                                width={200}
                                height={200}
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
                                {character.name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                lastPage={pagination?.last_visible_page || 1}
                setPage={setPage}
            />
        </>
    );
};

export default ImageUI;
