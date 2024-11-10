import Link from "next/link"

const topTitleAnime = ({ title }) => {
    return <h1 className="py-4 text-2xl font-bold text-start h1">{title}</h1>
}

const linkAnime = ({ linkTitle, linkHref }) => {
    return <Link href={linkHref} className="text-xl hover:text-indigo-500 transition-all ">{linkTitle}</Link>
}

const Header = {
    topTitleAnime: topTitleAnime,
    linkAnime: linkAnime
}

export default Header;