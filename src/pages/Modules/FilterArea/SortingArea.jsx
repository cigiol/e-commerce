import CheckBox from "@components/CheckBox";
import { sortSelector, updateAppField } from "@store/features/app/appSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sorting = () => {
  const dispatch = useDispatch();
  const sortOptions = ["ascDate", "descDate", "ascPrice", "descPrice"];
  const sort = useSelector(sortSelector);
  console.log(sort);

  return (
    <div>
      <label>Sort By</label>
      <div className="flex flex-col gap-4 p-4 bg-white shadow">
        {sortOptions.map((s) => (
          <CheckBox
            key={s}
            label={s}
            type="radio"
            name="sorting"
            value={sort}
            checked={s === sort}
            id={s}
            onChange={() =>
              dispatch(updateAppField({ field: "sort", value: s }))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Sorting;
