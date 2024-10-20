import { useSelector } from "react-redux";
import Filter from "./Filter";
import SortingArea from "./SortingArea";
import { brandsSelector, modelsSelector } from "@store/features/app/appSlice";

const FilterArea = () => {
  const brands = useSelector(brandsSelector);
  const models = useSelector(modelsSelector);
  return (
    <div className="flex flex-col gap-4">
      <SortingArea />
      <Filter title="Brands" items={brands} attribute={"brand"} />
      <Filter title="Model" items={models} attribute={"model"} />
    </div>
  );
};

export default FilterArea;
