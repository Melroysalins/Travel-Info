import React, { useState, useRef, useEffect } from "react";
import "./index.css";

import { originDeatisl, destinationDetails } from "../../constants";
import Partner from "../partner";

const InputBox = ({
  label,
  origin,
  destination,
  originvalue,
  setOriginValue,
  destinationvalue,
  setDestinationValue,
}) => {
  const [showdropdown, setShowDropDown] = useState(false);

  const containerRef = useRef(null);

  const handleClicked = () => {
    setShowDropDown(!showdropdown);
  };

  const handleSelectOrigin = (value) => {
    setOriginValue(value);
    setShowDropDown(!showdropdown);
  };

  const handleSelectDestination = (value) => {
    setDestinationValue(value);
    setShowDropDown(!showdropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropDown(false); // Hide the details when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="input-container" onClick={() => handleClicked()}>
      <label htmlFor="origin">{label}</label>
      <Partner
        originValue={originvalue}
        destinationValue={destinationvalue}
        origin={origin}
        destination={destination}
        showdropdown={showdropdown}
      />
      {showdropdown && (
        <div className="orignDestinationDropDown" ref={containerRef}>
          {origin
            ? originDeatisl?.map((list) => (
                <li
                  key={list?.id}
                  onClick={() => handleSelectOrigin(list?.name)}
                >
                  {list?.name}
                </li>
              ))
            : destinationDetails?.map((list) => (
                <li
                  key={list?.id}
                  onClick={() => handleSelectDestination(list?.name)}
                >
                  {list?.name}
                </li>
              ))}
        </div>
      )}
    </div>
  );
};

export default InputBox;
