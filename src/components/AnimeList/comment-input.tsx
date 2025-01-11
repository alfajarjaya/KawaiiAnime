'use client'

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import Swal from "sweetalert2";

interface CommentInputProps {
    anime_mal_id: number;
    anime_title: string;
    user_email: string;
    username: string;
}

const CommentInput: React.FC<CommentInputProps> = ({ anime_mal_id, anime_title, user_email, username }) => {
    const [comment, setComment] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handlerInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setComment(event.target.value);
    };

    const handlerPost = async (): Promise<void> => {
        if (!comment) return;
        setIsLoading(true);
        const data = { anime_mal_id, anime_title, user_email, comment, username };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_POST_COMMENT_URL}/api/v1/comment/`, {
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
                });
                setComment("");
                router.refresh();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Noo...!",
                    text: 'Failed to add comment'
                });
            }

        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: "Oops!",
                text: `Error: ${error.message}`
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter" && !isLoading) {
            handlerPost();
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-gray-700 rounded-lg shadow-md p-6 max-w-lg mx-auto">
            <input
                value={comment}
                onChange={handlerInput}
                onKeyPress={handleKeyPress}
                className="w-full h-10 p-4 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
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
