"use client"

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
import Swal from "sweetalert2";

const VideoPlayer = ({ videoId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleVideo = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    className="text-white rounded float-right bg-stone-900 px-3 mb-1"
                    onClick={handleVideo}>
                    <X size={32} />
                </button>
                <YouTube
                    videoId={videoId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Video is broken, please try another.',
                    })}
                />

            </div>
        )
    }

    return isOpen ? <Player /> : <button className="fixed bottom-5 right-5 w-32 p-3 bg-sky-500 hover:bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg hover:text-white" onClick={handleVideo}>Tonton Trailer</button>
}

export default VideoPlayer;