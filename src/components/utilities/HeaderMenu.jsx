const HeaderMenu = ({ title, page, desc }) => {
    return (
        <header className="p-10 text-white rounded-md">
            <div className="text-center">
                <h3 className="text-4xl font-extrabold tracking-wider mb-4">{title}</h3>
                <p className="text-xl font-semibold ">{page}</p>
            </div>
            <div className="mt-4 flex justify-center items-center gap-2">
                <div className="w-8 h-1 bg-white"></div>
                <p className="text-sm font-medium">{desc}</p>
                <div className="w-8 h-1 bg-white"></div>
            </div>
        </header>
    );
};

export default HeaderMenu;
