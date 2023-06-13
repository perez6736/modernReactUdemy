import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortCol } = useSort(data, config);

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) return col;

    const getIcons = (label, sortBy, sortOrder) => {
      if (label !== sortBy) {
        return (
          <div>
            <GoArrowSmallUp /> <GoArrowSmallDown />
          </div>
        );
      }

      if (sortOrder === null) {
        return (
          <div>
            <GoArrowSmallUp /> <GoArrowSmallDown />
          </div>
        );
      } else if (sortOrder === "asc") {
        return (
          <div>
            <GoArrowSmallUp />
          </div>
        );
      } else if (sortOrder === "desc") {
        return (
          <div>
            <GoArrowSmallDown />
          </div>
        );
      }
    };

    return {
      ...col,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortCol(col.label)}
        >
          <div className="flex items-cetner">
            {col.label}
            {getIcons(col.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
