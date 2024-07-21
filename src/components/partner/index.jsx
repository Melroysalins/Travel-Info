import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Partner = ({
  originValue,
  destinationValue,
  origin,
  destination,
  showdropdown,
}) => {
  return (
    <div className="Selector">
      <p>
        {origin
          ? originValue
            ? originValue
            : "please select origin"
          : destination
          ? destinationValue
            ? destinationValue
            : "please select destination"
          : "SYD"}
      </p>
      {!showdropdown ? (
        <ArrowDropDownIcon className="icons" />
      ) : (
        <ArrowDropUpIcon className="icons" />
      )}
    </div>
  );
};

export default Partner;
