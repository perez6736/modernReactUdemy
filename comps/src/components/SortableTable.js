import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((col) => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

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
          onClick={() => handleClick(col.label)}
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
