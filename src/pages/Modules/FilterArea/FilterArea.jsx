import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import SortingArea from "./SortingArea";
import {
  brandsSelector,
  modelsSelector,
  toggleFilterSelector,
  updateAppField,
} from "@store/features/app/appSlice";
import CloseImage from "@assets/close.svg";

const FilterArea = ({ className = "", radioName = "" }) => {
  const dispatch = useDispatch();
  const brands = useSelector(brandsSelector);
  const models = useSelector(modelsSelector);
  const isOpen = useSelector(toggleFilterSelector);
  const toggleFilter = () => {
    dispatch(updateAppField({ field: "toggleFilter", value: !isOpen }));
  };
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-4 ">
        <div className="block md:hidden relative">
          <img
            onClick={toggleFilter}
            className="absolute top-2 -right-2 cursor-pointer"
            src={CloseImage}
          />
        </div>
        <SortingArea radioName={radioName} />
        <Filter title="Brands" items={brands} attribute={"brand"} />
        <Filter title="Model" items={models} attribute={"model"} />
      </div>
    </div>
  );
};

export default FilterArea;
