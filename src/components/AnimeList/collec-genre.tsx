'use client';

import Link from "next/link";

interface Genre {
    name: string;
    url: string;
}

interface CollectionByGenreProps {
    genres: {
        data: Genre[];
    };
}

const CollectionByGenre: React.FC<CollectionByGenreProps> = ({ genres }) => {
    const genresDuplicated = [...genres.data, ...genres.data];

    return (
        <div
            className="flex overflow-hidden"
            onMouseOver={(e) => {
                const scrollAnimationElement = e.currentTarget.querySelector(".scroll-animation") as HTMLElement;
                if (scrollAnimationElement) {
                    scrollAnimationElement.style.animationPlayState = "paused";
                }
            }}
            onMouseOut={(e) => {
                const scrollAnimationElement = e.currentTarget.querySelector(".scroll-animation") as HTMLElement;
                if (scrollAnimationElement) {
                    scrollAnimationElement.style.animationPlayState = "running";
                }
            }}
        >
            <div className="flex scroll-animation space-x-4">
                {genresDuplicated.map((genre, index) => (
                    <Link
                        key={index}
                        href={genre.url}
                        className="text-lg flex-none bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 text-center rounded-lg shadow-lg snap-center transition-transform transform hover:scale-105 hover:shadow-xl hover:text-yellow-300 transition-colors duration-600 ease-in-out"
                    >
                        <h5>{genre.name}</h5>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CollectionByGenre;
