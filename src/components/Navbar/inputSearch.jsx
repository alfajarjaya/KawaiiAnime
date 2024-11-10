"use client";
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }

    return (
        <div className='relative'>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="cari anime..."
                    className="py-1 px-2 utilitas rounded-md w-full text-black"
                    ref={searchRef}
                />
                <button className="absolute top-1 end-2" onClick={handleSearch}>
                    <MagnifyingGlass size={22} color='#000' />
                </button>
            </form>
        </div>
    );
};

export default InputSearch;
