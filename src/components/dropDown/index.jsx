import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = ({ inputvalue, setInputValue }) => {
  const [selectedOption, setSelectedOption] = useState("economy");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showdropdown, setShowDropDown] = useState(false);
  const options = ["Economy", "Business", "First"];
  const containerRef = useRef(null);

  const handleInputChange = (value) => {
    setShowDropDown(true);
    setInputValue(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropDown(false);
        setIsOpen(false); // Hide the details when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectedList = (list) => {
    setInputValue(list);
    setShowDropDown(false);
  };

  return (
    <div className="dropdown-container" ref={containerRef}>
      <label htmlFor="cabin-selection">Cabin Selection</label>
      <div
        className={`dropdown ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => handleInputChange(e.target.value)}
          style={{ backgroundColor: !isOpen ? "#1C2519" : "black" }}
        />
        {!isOpen ? (
          <ArrowDropDownIcon className="icons-1" />
        ) : (
          <ArrowDropUpIcon className="icons-1" />
        )}
      </div>

      {showdropdown && (
        <div className="dropdown-containner">
          {options?.map((list, index) => (
            <li key={index} onClick={() => handleSelectedList(list)}>
              {list}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
