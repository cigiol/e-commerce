import { useEffect } from "react";
import { useGetProductsQuery } from "@store/features/app/appApi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, updateAppProducts } from "@store/features/app/appSlice";

function Home() {
  const { data: products, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const app = useSelector(appSelector);

  console.log(app);

  useEffect(() => {
    if (isLoading) return;
    dispatch(updateAppProducts(products));
  }, [products, isLoading]);

  return (
    <div className="font-bold">
      {isLoading ? <>LOADING...</> : products.map((p) => p.name)}
    </div>
  );
}

export default Home;
