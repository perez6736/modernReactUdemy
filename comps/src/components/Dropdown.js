import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //setIsOpen((currentIsOpen) => !currentIsOpen); - techinally correct to handle super fast repeat click
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //setIsOpen((currentIsOpen) => !currentIsOpen); - techinally correct to handle super fast repeat click
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (value) {
    content = value.label;
  }

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between itesm-center cursor-pointer"
        onClick={handleClick}
      >
        {content}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
