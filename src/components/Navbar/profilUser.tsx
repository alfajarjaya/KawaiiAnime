"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProfileUser {
    img: String
}

const ProfileUser: React.FC<ProfileUser> = ({ img }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="relative">
            <Image
                src={img}
                alt="..."
                width={50}
                height={50}
                className="w-50 h-50 rounded-full cursor-pointer"
                onClick={handleOpen}
            />
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50" onMouseLeave={handleOpen}>
                    <Link
                        href="/users/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-500 hover:text-white"
                    >
                        Profile
                    </Link>
                    <Link
                        href="/api/auth/signout"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-500 hover:text-white"
                    >
                        Logout
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProfileUser