import React from "react";
import "./index.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Miles from "../miles";
import Distance from "../distance";
import NotAvailable from "../notAvailable";

const BusinessMiles = ({ min_business_miles, message, min_business_tax }) => {
  return (
    <div className="BusinessMilesContainner">
      {min_business_miles ? (
        <Miles
          min_business_miles={min_business_miles}
          min_business_tax={min_business_tax}
        />
      ) : (
        <NotAvailable />
      )}

      <Distance message={message} />
    </div>
  );
};

export default BusinessMiles;
