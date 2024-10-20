import Input from "@components/Input";
import {
  appSelector,
  searchTermSelector,
  totalPriceSelector,
  updateAppField,
} from "@store/features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
import CartImage from "@assets/cart.svg";
import UserImage from "@assets/user.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector(searchTermSelector);
  const app = useSelector(appSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center text-white p-1 gap-3 xl:container xl:mx-auto">
        <div onClick={navigateToHome} className="font-bold cursor-pointer">
          ETERATION
        </div>
        <Input
          value={searchTerm}
          onChange={(e) =>
            dispatch(
              updateAppField({ field: "searchTerm", value: e.target.value })
            )
          }
          inputClass="text-primary flex-1 w-60 hidden sm:block"
        />
        <div className="flex gap-6">
          <div className="flex gap-2">
            <img src={CartImage} />
            <span>{totalPrice.toFixed(2)} ₺</span>
          </div>
          <div className="flex gap-2">
            <img src={UserImage} />
            <span>Cihan</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
