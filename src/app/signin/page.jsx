"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { GoogleLogo, GithubLogo } from '@phosphor-icons/react';
import { signIn as signInAll } from "@/libs/sign-in";

const Page = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await signInAll();
            setProviders(res);
            setLoading(false);
        };
        fetchProviders();
    }, []);


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-xl rounded-lg p-10 max-w-md w-full text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome Back!</h1>
                <p className="text-gray-500 mb-8">Sign in to your account</p>
                {loading ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span className="ml-2">Loading providers...</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {providers.map((provider) => (
                            <div key={provider.id}>
                                <button
                                    onClick={() => signIn(provider.id)}
                                    className="w-full flex items-center justify-center py-3 px-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                                    style={{
                                        backgroundColor: provider.id === 'google' ? '#4285F4' : '#333',
                                        color: 'white',
                                    }}
                                >
                                    {provider.id === 'google' && <GoogleLogo size={40} />}
                                    {provider.id === 'github' && <GithubLogo size={40} />}
                                    <span className="text-lg font-medium">
                                        Sign in with {provider.name}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;