import React from "react";
import ReactPaginate from "react-paginate";

export default function PaginatedItems({ totalPages, handlePagination }) {
  const handlePageClick = (event) => {
    handlePagination(event.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        forcePage={0}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
