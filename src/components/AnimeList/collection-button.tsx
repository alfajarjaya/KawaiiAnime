'use client'

import { useState, MouseEvent } from "react";
import Swal from "sweetalert2";

interface CollectionButtonProps {
    anime_mal_id: number;
    anime_title: string;
    anime_img: string;
    user_email: string;
}

const CollectionButton: React.FC<CollectionButtonProps> = ({ anime_mal_id, anime_title, anime_img, user_email }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handlerCollec = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        setIsLoading(true);
        const data = { anime_mal_id, anime_title, anime_img, user_email };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_POST_COMMENT_URL}/api/v1/collection`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const collection = await response.json();

            if (collection.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: "Success",
                    text: 'Successfully added to Collection',
                }).then((response) => {
                    if (response.isConfirmed) window.location.reload();
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Noo...!",
                    text: 'Failed to add to Collection'
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

    const LoadingSpinner = (): JSX.Element => {
        return <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
    }

    return (
        <button
            className="px-2 py-1 bg-yellow-500"
            onClick={handlerCollec}
            disabled={isLoading}
        >
            {isLoading ? <LoadingSpinner /> : "Save to Collection"}
        </button>
    );
}

export default CollectionButton;
