import { Pagination } from "react-bootstrap";

export const CustomPagination = ({
  dataPerPage,
  totalData,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalData / dataPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    windowUp();
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    windowUp();
  };
  const windowUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Pagination className="d-flex align-items-center gap-3">
      <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />
      <p className="m-0">
        {currentPage} of {totalPages}
      </p>
      <Pagination.Next
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};
