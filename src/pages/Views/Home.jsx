import { useEffect } from "react";
import { useGetProductsQuery } from "@store/features/app/appApi";
import { useDispatch, useSelector } from "react-redux";
import { appSelector, updateAppProducts } from "@store/features/app/appSlice";
import Button from "@components/Button";
import Input from "@components/Input";
import CardList from "@pages/Modules/CardList/CardList";
import Main from "@pages/Layout/Main";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const app = useSelector(appSelector);

  console.log(app);

  useEffect(() => {
    if (isLoading) return;
    dispatch(updateAppProducts(products));
  }, [products, isLoading]);

  return (
    <Main>
      <div></div>
      {isLoading ? <div>LOADING...</div> : <CardList />}
      <div></div>
    </Main>
  );
};

export default Home;
