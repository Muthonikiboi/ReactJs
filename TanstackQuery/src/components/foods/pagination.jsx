function Pagination({ currentPage, setCurrentPage, totalItems, itemsPerPage }) {
   const totalPages = Math.ceil(totalItems / itemsPerPage);

   return (
      <div className="flex justify-between items-center mb-4">
         <button
            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={currentPage === 1}
         >
            Previous
         </button>
         <span className="text-xl font-bold">Page {currentPage} of {totalPages}</span>
         <button
            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={currentPage === totalPages}
         >
            Next
         </button>
      </div>
   );
}

export default Pagination;
