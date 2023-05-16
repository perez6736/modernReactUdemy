import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Orange", value: "orange" },
    { label: "Blue", value: "blue" },
  ];
  return <Dropdown options={options} />;
}

export default App;
