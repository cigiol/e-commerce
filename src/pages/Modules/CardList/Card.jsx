import Button from "@components/Button";
import { addToBasket, basketSelector } from "@store/features/app/appSlice";
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
      ? console.log("exist")
      : dispatch(addToBasket({ item: { id, name, price } }));
  };
  console.log(basket);
  return (
    <div
      className="flex flex-col justify-between bg-white p-3 gap-3 cursor-pointer"
      onClick={navigateToProduct}
    >
      <img src={image} />
      <span className="text-primary">{price} ₺</span>
      <span className="text-black">{name}</span>
      <Button
        buttonText="Add To Cart"
        buttonClass="rounded-md p-2 cursor-pointer"
        onClick={handleAddToBasket}
      />
    </div>
  );
};

export default Card;
