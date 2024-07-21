import React from "react";
import "./index.css";
import Logo from "../logo";
import PartnerProgram from "../partnerProgram";
import Destination from "../destination";
import Date from "../date";
import BusinessMiles from "../businessMiles";
import SelectMessage from "../selectMessage";

const DetailDisplay = ({ data, originvalue, destinationvalue }) => {
  console.log("data--->", data);
  if (!data || data.length === 0) {
    return <SelectMessage />;
  }

  return (
    <div className="detailDisplay">
      <Logo />
      <PartnerProgram partner_program={data?.partner_program} />
      <Destination
        originvalue={originvalue}
        destinationvalue={destinationvalue}
      />
      <Date />
      <BusinessMiles
        min_business_miles={data?.min_business_miles}
        min_business_tax={data?.min_business_tax}
        message={"Min Business Miles"}
      />
      <BusinessMiles
        min_business_miles={data?.min_economy_miles}
        min_business_tax={data?.min_economy_tax}
        message={"Min Economy Miles"}
      />
      <BusinessMiles
        min_business_miles={data?.min_first_miles}
        min_business_tax={data?.min_first_tax}
        message={"Min First Miles"}
      />
    </div>
  );
};

export default DetailDisplay;
