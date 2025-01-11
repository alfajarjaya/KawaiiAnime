import React from 'react'
import Link from "next/link";
import ProfileUser from "./profilUser";
import { authUserSession } from '../../libs/auth-libs';

const UserAction: React.FC = async () => {
    const user = await authUserSession();

    return (
        <div className="flex gap-4 justify-center md:justify-end items-center w-full">
            {user ? (
                <ProfileUser img={user.image} />
            ) : (
                <Link
                    href="/api/auth/signin"
                    className="w-full md:w-auto text-sm font-medium text-white hover:text-black bg-pink-500 hover:bg-white py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                    Login
                </Link>
            )}
        </div>

    );
};

export default UserAction;
