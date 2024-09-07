import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ totalCards, cardsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= 4) {
      // Render buttons if there are 4 or fewer pages
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === i ? 'bg-blue-600 text-white' : 'bg-blue-300 text-white hover:bg-blue-400'}`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Render buttons with ellipses
      if (currentPage > 1) {
        buttons.push(
          <button
            key="prev"
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/80"
          >
            <FaChevronLeft />
          </button>
        );
      }

      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === 1 ? 'bg-blue-600 text-white' : 'bg-blue-300 text-white hover:bg-blue-400'}`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        buttons.push(
          <div key="ellipsis1" className="flex items-center justify-center w-10 h-10 bg-zinc-200 rounded-lg">
            <span className="text-zinc-500">...</span>
          </div>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === i ? 'bg-blue-600 text-white' : 'bg-blue-300 text-white hover:bg-blue-400'}`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <div key="ellipsis2" className="flex items-center justify-center w-10 h-10 bg-zinc-200 rounded-lg">
            <span className="text-zinc-500">...</span>
          </div>
        );

        buttons.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'bg-blue-300 text-white hover:bg-blue-400'}`}
          >
            {totalPages}
          </button>
        );
      }

      if (currentPage < totalPages) {
        buttons.push(
          <button
            key="next"
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/80"
          >
            <FaChevronRight />
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
