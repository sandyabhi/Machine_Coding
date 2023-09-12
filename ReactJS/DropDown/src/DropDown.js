import { useState } from "react";

export default function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="toggle_button" onClick={handleToggle}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <ul className="options_list">
          {options.map((option, idx) => (
            <li
              className={selectedOption === option ? "selected_item" : ""}
              key={idx}
              onClick={() => handleSelectedOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
