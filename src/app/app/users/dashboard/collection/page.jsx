import Image from "next/image";
import Link from "next/link";
import Header from "@/components/dashboard/header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({ where: { user_email: user.email } })

    return (
        <section className="mt-4 container mx-auto px-4 w-full h-screen">
            <Header title={"My Collection"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative border-2">
                            <Image src={collect.anime_img} alt={collect.anime_title} width={350} height={350} className="img w-full" />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-pink-500 h-16">
                                <h5 className="text-xl text-center">
                                    {collect.anime_title}
                                </h5>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </section>
    )
}

export default Page;