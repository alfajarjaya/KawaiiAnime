import React from "react";
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

interface PaginationProps {
    page: number;
    lastPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, lastPage, setPage }) => {
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    };

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTo({
            behavior: 'smooth',
            top: 0,
        });
    };

    return (
        <div className="flex justify-center items-center py-8 px-4 gap-4 text-lg">
            {page > 1 && (
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    onClick={handlePrevPage}
                >
                    <ArrowLeft className="text-blue-500" />
                    Prev
                </button>
            )}

            <p className="font-semibold text-gray-700">
                Page <span className="text-blue-500">{page}</span> of <span className="text-blue-500">{lastPage}</span>
            </p>

            {page < lastPage && (
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    onClick={handleNextPage}
                >
                    Next
                    <ArrowRight className="text-blue-500" />
                </button>
            )}
        </div>
    );
};

export default Pagination;
