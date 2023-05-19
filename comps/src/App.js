import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Orange", value: "orange" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <Dropdown onChange={handleSelect} options={options} value={selection} />
  );
}

export default App;
