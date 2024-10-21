import CheckBox from "@components/CheckBox";
import { sortSelector, updateAppField } from "@store/features/app/appSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sorting = ({ radioName = "" }) => {
  const sort = useSelector(sortSelector);
  const dispatch = useDispatch();
  const sortOptions = [
    { value: "ascDate", label: "Old to new" },
    { value: "descDate", label: "New to old" },
    { value: "ascPrice", label: "Price hight to low" },
    { value: "descPrice", label: "Price low to hight" },
  ];
  console.log(sort);
  return (
    <div>
      <label>Sort By</label>
      <div className="flex flex-col gap-4 p-4 bg-white shadow">
        {sortOptions.map((s) => (
          <CheckBox
            key={s.value}
            label={s.label}
            type="radio"
            name={radioName}
            value={s.value}
            checked={s.value === sort}
            id={s.value}
            onChange={() =>
              dispatch(updateAppField({ field: "sort", value: s.value }))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Sorting;
