import { DiscordLogo, RedditLogo, TelegramLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-4">
                        <h1 className="text-white text-xl font-bold">Kawaii<span className="text-pink-500">Anime</span></h1>
                        <div className="flex ml-4 space-x-3">
                            <Link href="#" className="hover:text-white">
                                <DiscordLogo size={32} />
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <TelegramLogo size={32} />
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <RedditLogo size={32} />
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <TwitterLogo size={32} />
                            </Link>
                        </div>
                    </div>

                    {/* A-Z List */}
                    <div className="text-center mb-4">
                        <h2 className="text-white text-lg font-semibold">A-Z LIST</h2>
                        <p>Searching anime order by alphabet name A to Z.</p>
                        <div className="flex justify-center flex-wrap mt-2">
                            {[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((item) => (
                                <Link
                                    href={`/search/${item}`}
                                    key={item}
                                    className="m-1 px-3 py-1 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links and Disclaimer */}
                    <div className="text-center mt-4 space-x-4 text-sm">
                        <Link href="#" className="hover:text-white">
                            Terms of service
                        </Link>
                        <Link href="#" className="hover:text-white">
                            DMCA
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Contact
                        </Link>
                        <Link href="/" className="hover:text-white">
                            KawaiiAnime
                        </Link>
                    </div>
                    <p className="text-center text-xs mt-4">
                        HiAnime does not store any files on our server, we only linked to
                        the media which is hosted on 3rd party services.
                    </p>
                    <p className="text-center text-xs mt-1">
                        © KawaiiAnime All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
