import Button from "@components/Button";
import { useGetProductByIdQuery } from "@store/features/app/appApi";
import {
  addToBasket,
  basketSelector,
  increaseBasket,
} from "@store/features/app/appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoadingImage from "@assets/loading.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductByIdQuery({ id });
  const basket = useSelector(basketSelector);

  const handleAddToBasket = () => {
    let isExist = basket.find((b) => b.id === id);
    isExist
      ? dispatch(increaseBasket({ id }))
      : dispatch(
          addToBasket({
            item: { id, name: product.name, price: product.price, quantity: 1 },
          })
        );
  };

  return (
    <div className="flex justify-between bg-white p-3 gap-3 flex-1 shadow">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <img className="w-10 text-primary" src={LoadingImage} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 items-center">
            <img
              className="w-full h-full object-cover text-lg"
              src={product.image}
            />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col">
              <span className="text-black text-lg">{product.name}</span>
              <span className="text-primary text-sm">{product.price} ₺</span>
            </div>
            <Button
              buttonText="Add To Cart"
              buttonClass="rounded-md p-2 w-full"
              onClick={handleAddToBasket}
            />
            <div className="flex-grow">{product.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
