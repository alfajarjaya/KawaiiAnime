'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const CommentInput = ({ anime_mal_id, anime_title, user_email, username }) => {
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handlerInput = (event) => {
        setComment(event.target.value);
    };

    const handlerPost = async (event) => {
        event.preventDefault();
        if (!comment) return;
        setIsLoading(true);
        const data = { anime_mal_id, anime_title, user_email, comment, username };

        console.log(data)


        try {
            const response = await fetch('/api/v1/comment/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const postComment = await response.json();

            if (postComment.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: "Success",
                    text: 'Successfully added comment'
                })
                setComment("");
                router.refresh()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Noo...!",
                    text: 'Failed to add comment'
                });
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "Oops!",
                text: `Error: ${error.message}`
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
            <input
                value={comment}
                onChange={handlerInput}
                className="w-full h-10 p-4 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 resize-none"
                placeholder="Write your comment here..."
            />
            <button
                onClick={handlerPost}
                className={`w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-yellow-500 ${isLoading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                disabled={isLoading}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg
                            className="animate-spin h-5 w-5 text-white"
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
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C6.28 0 0 6.28 0 14h4z"
                            ></path>
                        </svg>
                        Loading...
                    </span>
                ) : (
                    "Posting"
                )}
            </button>
        </div>

    );
}

export default CommentInput;
