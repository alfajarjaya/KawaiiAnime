import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCharacterAnime, getPictureById } from "../../../api/api";
import Header from "../../../../components/AnimeList/header";
import Footer from "../../../../components/footer";

interface CharacterProps {
    mal_id: number;
    images: {
        webp: {
            image_url: string;
        };
    };
    name: string;
    about: string;
}

interface CharacterResponse {
    data: CharacterProps;
}

interface PictureProps {
    data: [
        jpg: {
            image_url: string
        }
    ]
}

interface PageParams {
    params: { id: string };
}

const parseAbout = (about: string) => {
    const result: Record<string, string> = {};
    const longText: Record<string, string> = {};
    const lines = about.split("\n");
    const regex = /^([\w\s]+):\s*(.+)/;

    for (const line of lines) {
        const match = line.match(regex);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            result[key] = value;
        } else {
            if (line.trim().length > 0) {
                longText["Description"] = (longText["Description"] || "") + line + "\n";
            }
        }
    }

    return { result, longText };
};

const Page: React.FC = async ({ params: { id } }: PageParams) => {
    const character: CharacterResponse = await getCharacterAnime(`characters/${id}`);
    const { result: aboutData, longText } = parseAbout(character.data.about);

    const picture: PictureProps = await getPictureById("characters", character.data.mal_id, "pictures")
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-6">
                    <Image
                        src={character.data.images.webp.image_url}
                        alt={character.data.name}
                        width={300}
                        height={450}
                        className="rounded-xl shadow-lg object-cover"
                    />
                    <h1 className="text-2xl font-bold text-white">{character.data.name}</h1>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
                        {Object.entries(aboutData).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-2 border-b border-gray-700">
                                <span className="font-bold text-white">{key}:</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>

                    {longText.Description && (
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300 mt-6">
                            <h3 className="font-bold text-white mb-4">Background Information:</h3>
                            <p>{longText.Description}</p>
                        </div>
                    )}

                    <Header.TopTitleAnime title={`Picture ${character.data.name}`} />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {picture.data.map((pic, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-md border-2 border-cyan-400"
                            >
                                <Link href={`/characters/pic/${character.data.mal_id}`}>
                                    <Image
                                        src={pic.jpg?.image_url}
                                        alt={pic.jpg?.image_url}
                                        className="object-cover w-full h-full"
                                        width={300}
                                        height={300}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
