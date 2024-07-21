import React from "react";

const SelectMessage = ({ message }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",
        justifyContent: "flex-end",
      }}
    >
      <p style={{ color: "white" }}>
        {message
          ? "Please Select Origin & Destination"
          : " Try another search route."}{" "}
      </p>
    </div>
  );
};

export default SelectMessage;
