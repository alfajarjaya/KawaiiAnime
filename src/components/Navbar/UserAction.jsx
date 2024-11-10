import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserAction = async () => {
    const user = await authUserSession();

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 md:my-0 my-3 text-black">
            {
                user ? <Link href="/users/dashboard" className="hover:text-white">Dashboard</Link> : null
            }
            <Link href={actionURL} className="hover:text-white">{actionLabel}</Link>
        </div>
    )
}

export default UserAction;