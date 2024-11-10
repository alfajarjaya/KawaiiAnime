const Pagination = ({ page, lastPage, setPage }) => {
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTo({
            behavior: 'smooth',
            top: 0
        });
    };

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTo({
            behavior: 'smooth',
            top: 0
        });
    };

    return (
        <div className="flex justify-center items-center py-8 px-2 gap-4 text-xl">
            {page <= 1 ? null :
                <button className="transition-all hover:text-blue-400" onClick={handlePrevPage}>Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button className="transition-all hover:text-blue-400" onClick={handleNextPage}>Next</button>
            }
        </div>
    )
}

export default Pagination