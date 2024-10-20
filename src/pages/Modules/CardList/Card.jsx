import Button from "@components/Button";
import {
  addToBasket,
  basketSelector,
  increaseBasket,
} from "@store/features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ id = "", image = "", name = "", price = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(basketSelector);
  const navigateToProduct = () => {
    navigate("/product/" + id);
  };

  const handleAddToBasket = (e) => {
    e.stopPropagation();
    let isExist = basket.find((b) => b.id === id);
    isExist
      ? dispatch(increaseBasket({ id }))
      : dispatch(addToBasket({ item: { id, name, price, quantity: 1 } }));
  };
  console.log(basket);
  return (
    <div
      className="flex flex-col justify-between bg-white p-3 gap-3 cursor-pointer"
      onClick={navigateToProduct}
    >
      <img src={image} />
      <span className="text-primary text-sm">{price} ₺</span>
      <span className="text-black">{name}</span>
      <Button
        buttonText="Add To Cart"
        buttonClass="rounded-md p-2"
        onClick={handleAddToBasket}
      />
    </div>
  );
};

export default Card;
