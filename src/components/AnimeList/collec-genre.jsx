import Link from "next/link";

const CollectionByGenre = ({ genres }) => {
    return (
        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide snap-x snap-mandatory">
            {genres.data?.map((genre, index) => {
                return (
                    <Link href={genre.url} key={index} className="text-lg flex-none bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 text-center rounded-lg shadow-lg text-center snap-center transition-transform transform hover:scale-105 hover:shadow-xl hover:text-yellow-300 transition-colors duration-200 ease-in-out">
                        <h5>{genre.name}</h5>
                    </Link>
                )
            })}
        </div>
    )
}

export default CollectionByGenre;
