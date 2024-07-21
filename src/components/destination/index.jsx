import React from "react";
import "./index.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Destination = ({ originvalue, destinationvalue }) => {
  return (
    <div className="Destination">
      <p>{originvalue}</p>
      <ArrowForwardIcon className="arrowIcon" style={{ fontSize: "14px" }} />
      <p style={{ marginLeft: "2px" }}>{destinationvalue}</p>
    </div>
  );
};

export default Destination;
