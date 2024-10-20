import Input from "@components/Input";
import {
  appSelector,
  searchTermSelector,
  updateAppField,
} from "@store/features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const app = useSelector(appSelector);
  return (
    <header className="bg-primary">
      <div className="flex justify-between items-center text-white p-1 gap-3 xl:container xl:mx-auto">
        <span>ETERATION</span>
        <Input
          value={searchTerm}
          onChange={(e) =>
            dispatch(
              updateAppField({ field: "searchTerm", value: e.target.value })
            )
          }
          inputClass="text-primary"
        />
        <div>
          <span>3000 ₺</span>
          <span>Cihan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
