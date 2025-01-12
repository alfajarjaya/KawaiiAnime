import ImageHero from '../../components/Character/imageHero';
import TypedTextHero from '../../components/Character/typed';
import { getCharacterAnime } from '../api/api';

const Page: React.FC = async () => {
    const response = await getCharacterAnime('characters', 'entry');

    let srcImage = Array.isArray(response.data)
        ? response.data.sort(() => Math.random() - 0.5).slice(0, 3)
        : []; 

    return (
        <>
            <section className="m-10">
                <div className="rounded-3xl min-h-[30vh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 bg-[#6C2BD9] shadow-lg shadow-white">
                    <TypedTextHero />
                    <ImageHero src={{ data: srcImage }} />
                </div>
            </section>
            <div className="container mx-auto px-4 pb-[100px]"></div>
        </>
    );
};

export default Page;
