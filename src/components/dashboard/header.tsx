"use client"
import React from "react";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface Header {
    title: string
}

const Header: React.FC<Header> = ({ title }) => {
    const router = useRouter();
    const handlerBack = (event) => {
        event.preventDefault();
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-8">
            <button onClick={handlerBack}><ArrowSquareLeft size={32} /></button>
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
    )
}

export default Header