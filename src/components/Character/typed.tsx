'use client'

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedTextHero: React.FC = () => {
    const typedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const typedInstance = new Typed(typedRef.current!, {
            strings: ['Find Your Perfect Anime Match', 'Discover Your Anime Character', 'Explore Your Anime Reflection'],
            typeSpeed: 100,
            backSpeed: 10,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typedInstance.destroy();
        };
    }, []);
    return (
        <div className='flex flex-col justify-center mt-10 md:mt-0'>
            <h1 className='text-4xl md:text-6xl font-bold text-white w-full'>Get Anime Character</h1>
            <h1 className="text-2xl md:text-2xl font-bold text-white">
                <span ref={typedRef} className="typed"></span>
            </h1>
        </div>
    )
}

export default TypedTextHero