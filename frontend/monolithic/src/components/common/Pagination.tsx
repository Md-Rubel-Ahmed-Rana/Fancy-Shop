import React, { useState } from "react";

const Pagination = ({
  totalData,
  itemsPerPage,
}: {
  totalData: number;
  itemsPerPage: number;
}) => {
  const totalPages = Math.ceil(totalData / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: number) => {
    console.log("Page clicked: ", page);
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    // Render buttons for the first three pages
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`join-item btn ${
            currentPage === i ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (totalPages > 3) {
      buttons.push(
        <button key="ellipsis" className="join-item btn btn-disabled">
          ...
        </button>
      );
    }

    // Render buttons for the last two pages
    for (let i = Math.max(totalPages - 1, 4); i <= totalPages; i++) {
      if (currentPage === 1 && i === 4) {
        // Hide number 4 button when page 1 is active
        continue;
      }

      buttons.push(
        <button
          key={i}
          className={`join-item btn ${currentPage === i ? "bg-blue-500" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className="join">
      {renderPaginationButtons()}
      <button className="join-item btn" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
