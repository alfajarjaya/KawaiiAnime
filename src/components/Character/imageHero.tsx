import Image from "next/image";
import Link from "next/link";

interface ImageProps {
    src: {
        data: {
            mal_id: number,
            images: {
                webp: {
                    image_url: string
                }
            },
        }[]
    };
}

const ImageHero: React.FC<ImageProps> = ({ src }) => {
    const gridPositions = [
        { col: "col-start-1 row-start-1", justify: "justify-start" },
        { col: "col-start-3 row-start-2", justify: "justify-end" },
        { col: "col-start-2 row-start-3", justify: "justify-center" }
    ];

    return (
        <div className="hidden md:block">
            <div className="grid grid-cols-3 grid-rows-3 md:h-[500px] relative">
                {src.data?.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center ${gridPositions[index]?.justify} ${gridPositions[index]?.col}`}
                    >
                        <div className="w-[250px] h-[250px] rounded-full overflow-hidden flex items-center justify-center">
                            <Link href={`/characters/${item.mal_id}`}>
                                <Image
                                    src={item.images?.webp.image_url}
                                    alt="char"
                                    width={250}
                                    height={250}
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageHero;
