import { productsSelector } from "@store/features/app/appSlice";
import Card from "./Card";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const CardList = ({ itemsPerPage = 12 }) => {
  const products = useSelector(productsSelector);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems?.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <ReactPaginate
          className="flex gap-3"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="text-pagination"
          pageLinkClassName="page-link"
          previousClassName="text-pagination"
          previousLinkClassName="page-link"
          nextClassName="text-pagination"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="text-pagination"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="px-2 bg-white !text-primary"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default CardList;
