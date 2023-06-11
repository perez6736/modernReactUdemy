import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
  const { config } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    console.log(sortOrder);
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

    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>{col.label}IS SORTABALE</th>
      ),
    };
  });

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
