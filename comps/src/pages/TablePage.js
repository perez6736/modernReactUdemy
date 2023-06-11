import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 2 },
    { name: "Pepper", color: "bg-red-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  function getSortValue(fruit) {
    return fruit.name;
  }

  const sortOrder = "asc";
  data.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    const reverseOrder = sortOrder === "asc" ? 1 : -1;

    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB) * reverseOrder;
    } else {
      return (valueA - valueB) * reverseOrder;
    }
  });

  return (
    <SortableTable data={data} config={config} keyFn={keyFn}>
      Table
    </SortableTable>
  );
}

export default TablePage;
