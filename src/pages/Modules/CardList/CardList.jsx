import { useEffect, useMemo, useState } from "react";
import { useGetProductsQuery } from "@store/features/app/appApi";
import { useDispatch, useSelector } from "react-redux";
import {
  appSelector,
  filtersSelector,
  searchTermSelector,
  sortSelector,
  updateApp,
} from "@store/features/app/appSlice";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const CardList = ({ itemsPerPage = 12 }) => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const app = useSelector(appSelector);
  const filters = useSelector(filtersSelector);
  const searchTerm = useSelector(searchTermSelector);
  const sort = useSelector(sortSelector);
  const filteredProducts = useMemo(() => {
    return products
      ?.filter((p) =>
        filters.brand.length ? filters.brand.includes(p.brand) : p
      )
      .filter((p) =>
        filters.model.length ? filters.model.includes(p.model) : p
      )
      .filter((p) => (searchTerm ? p.name.includes(searchTerm) : p))
      .sort((a, b) => {
        if (sort === "ascDate") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sort === "descDate") {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sort === "ascPrice") {
          return b.price - a.price;
        } else if (sort === "descPrice") {
          return a.price - b.price;
        } else {
          return 0;
        }
      });
  }, [filters, products, sort]);

  console.log(filteredProducts);

  useEffect(() => {
    if (isLoading) return;
    const models = Array.from(
      new Set(
        products.map((product) => JSON.stringify({ model: product.model }))
      )
    ).map((product) => JSON.parse(product));
    const brands = Array.from(
      new Set(
        products.map((product) => JSON.stringify({ brand: product.brand }))
      )
    ).map((product) => JSON.parse(product));
    dispatch(updateApp({ ...app, products, brands, models }));
    console.log(models, brands);
  }, [products, isLoading]);

  useEffect(() => {
    if (filteredProducts) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredProducts?.length;
    setItemOffset(newOffset);
  };

  return isLoading ? (
    <div>LOADING...</div>
  ) : (
    <div className="flex flex-col gap-5">
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
      <div className="flex justify-center">
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
    </div>
  );
};

export default CardList;
