import prisma from "@/libs/prisma";
import Header from "./header";

interface Comment {
    id: number;
    anime_mal_id: number;
    username: string;
    comment: string;
}

interface CommentBoxProps {
    anime_mal_id: number;
}

const CommentBox: React.FC<CommentBoxProps> = async ({ anime_mal_id }) => {
    const comments: Comment[] = await prisma.comment.findMany({ where: { anime_mal_id } });

    return (
        <section className="my-8">
            <Header.TopTitleAnime title="Komentar" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-sky-600 transition duration-300 ease-in-out"
                    >
                        <h4 className="text-lg mb-2 font-bold">{comment.username}</h4>
                        <p className="text-sm leading-relaxed font-i">{comment.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommentBox;
