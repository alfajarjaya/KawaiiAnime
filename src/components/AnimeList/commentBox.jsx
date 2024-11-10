import prisma from "@/libs/prisma"
import Header from "./header";

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

    return (
        <section className="my-8">
            <Header.topTitleAnime title={'Komentar'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                {comments.map(comment => (
                    <div
                        key={comment.id}
                        className="bg-gray-400 text-white p-4 rounded-lg shadow-md hover:bg-sky-600 transition duration-300 ease-in-out"
                    >
                        <h4 className="text-lg font-semibold mb-2">{comment.username}</h4>
                        <p className="text-sm leading-relaxed">{comment.comment}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default CommentBox;