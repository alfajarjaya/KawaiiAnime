import Header from "@/components/dashboard/header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
    const user = await authUserSession();
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

    return (
        <section className="mt-4 container mx-auto px-4 h-screen">
            <Header title={'My Comments'}/>
            <div className="grid grid-cols-1">
                {comments.map(comment => {
                    return (
                        <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-gray-300 text-black p-4 my-4">
                            <p className="font-bold">{comment.anime_title}</p>
                            <p className="italic">{comment.comment}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page;