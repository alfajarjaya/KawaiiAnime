import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";

interface TopTitleAnimeProps {
    title: string;
}

const TopTitleAnime: React.FC<TopTitleAnimeProps> = ({ title }) => {
    return <h1 className="py-4 text-2xl font-bold text-start h1">{title}</h1>;
};

interface LinkAnimeProps {
    linkTitle: string;
    linkHref: string;
}

const LinkAnime: React.FC<LinkAnimeProps> = ({ linkTitle, linkHref }) => {
    return (
        <div className="flex flex-col items-center justify-center px-5">
            <Link
                href={linkHref}
                className="flex flex-row items-center text-xl hover:text-indigo-500 transition-all gap-3"
            >
                {linkTitle}
                <ArrowRight color="white" />
            </Link>
        </div>
    );
};

const Header = {
    TopTitleAnime,
    LinkAnime,
};

export default Header;
