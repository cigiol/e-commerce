import CheckBox from "@components/CheckBox";
import Input from "@components/Input";
import {
  addFilter,
  filtersSelector,
  removeFilter,
} from "@store/features/app/appSlice";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingImage from "@assets/loading.svg";

const Filter = ({ title, items, attribute }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filters = useSelector(filtersSelector);
  const dispatch = useDispatch();
  const filteredItems = useMemo(() => {
    return searchTerm
      ? items.filter((item) =>
          item[attribute]
            .toLocaleLowerCase("tr")
            .includes(searchTerm.toLocaleLowerCase("tr"))
        )
      : items;
  }, [searchTerm, items]);

  return (
    <div>
      <label>{title}</label>
      <div className="flex flex-col gap-4 p-4 bg-white shadow h-52">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputClass="bg-secondary"
        />
        <div className="overflow-y-scroll">
          {filteredItems.length > 0 ? (
            filteredItems?.map((item) => (
              <CheckBox
                key={item[attribute]}
                label={item[attribute]}
                type="checkbox"
                name="sorting"
                className="p-1"
                checked={filters[attribute].includes(item[attribute])}
                id={item[attribute]}
                onChange={() =>
                  filters[attribute].includes(item[attribute])
                    ? dispatch(
                        removeFilter({ attribute, item: item[attribute] })
                      )
                    : dispatch(addFilter({ attribute, item: item[attribute] }))
                }
              />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <img className="w-10 text-primary" src={LoadingImage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
