import React from "react";
import FilterImage from "@assets/filter.svg";
import FilterArea from "./FilterArea";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFilterSelector,
  updateAppField,
} from "@store/features/app/appSlice";

const MobileFilter = ({ className = "" }) => {
  const isOpen = useSelector(toggleFilterSelector);
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(updateAppField({ field: "toggleFilter", value: !isOpen }));
  };
  return (
    <div className={`${className}`}>
      <img
        onClick={toggleFilter}
        className="bg-primary w-7 cursor-pointer rounded p-1"
        src={FilterImage}
      />
      <FilterArea
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white absolute left-0 top-0 z-1`}
        radioName="mobile-sorting"
      />
    </div>
  );
};

export default MobileFilter;
