import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    const user = await authUserSession();
    return (
        <div className="flex flex-col mt-20 items-center min-h-screen">
            <Image
                src={user.image}
                alt="..."
                width={300}
                height={300}
                className="rounded-full border-2 border-black hover:scale-105 transition ease-in-out cursor-pointer shadow-[0px_0px_20px_10px_rgba(0,0,0,0.2)]"
            />
            <div className="my-8 text-center">
                <h5>Welcome, {user.name}</h5>
                <h5>{user.email}</h5>
            </div>
            <div className="flex flex-wrap gap-4 py-8">
                <Link
                    href="/users/dashboard/collection"
                    className="font-bold text-lg bg-yellow-600 px-4 py-2 rounded-lg hover:bg-teal-500 transition ease-in-out delay-150 hover:-translate-y-1"
                >
                    My Collection
                </Link>
                <Link
                    href="/users/dashboard/comment"
                    className="font-bold text-lg bg-yellow-600 px-4 py-2 rounded-lg hover:bg-teal-500 transition ease-in-out delay-150 hover:-translate-y-1"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page