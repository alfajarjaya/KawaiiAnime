'use client'

import { useState } from "react";
import Swal from "sweetalert2";

const CollectionButton = ({ anime_mal_id, anime_title, anime_img, user_email }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlerCollec = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = { anime_mal_id, anime_title, anime_img, user_email };

        try {
            const response = await fetch('/api/v1/collection/', {
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
                    text: 'Successfully added to Collection'
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
        <>
            <button
                className="px-2 py-1 bg-yellow-500"
                onClick={handlerCollec}
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Save to Collection"}
            </button>
        </>
    );
}

export default CollectionButton;