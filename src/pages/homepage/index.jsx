import React, { useState } from "react";
import "./index.css";
import Heading from "../../components/heading";
import InputBox from "../../components/inputBox";
import Dropdown from "../../components/dropDown";
import DetailDisplay from "../../components/detailDisplay";
import { fetchData } from "../../services";
import SelectMessage from "../../components/selectMessage";

const Homepage = () => {
  const [originvalue, setOriginValue] = useState("");
  const [destinationvalue, setDestinationValue] = useState("");
  const [inputvalue, setInputValue] = useState("Economy");
  const [result, setResult] = useState();
  const [message, setMessage] = useState(true);

  const handleSearch = async () => {
    if (!originvalue && !destinationvalue) {
      alert("Please select Origin and Destination");
    }

    const data = await fetchData({ originvalue, destinationvalue, inputvalue });
    console.log(data);

    setResult(data?.data);
    if (data?.data?.length === 0) setMessage(false);
  };

  return (
    <div className="HomePage">
      <Heading />

      <div className="HomepageContainner">
        <InputBox
          label={"Origin"}
          origin={true}
          destination={false}
          originvalue={originvalue}
          setOriginValue={setOriginValue}
          destinationvalue={destinationvalue}
          setDestinationValue={setDestinationValue}
        />
        <InputBox
          label={"Destination"}
          destination={true}
          origin={false}
          originvalue={originvalue}
          setOriginValue={setOriginValue}
          destinationvalue={destinationvalue}
          setDestinationValue={setDestinationValue}
        />
        <Dropdown inputvalue={inputvalue} setInputValue={setInputValue} />
      </div>
      <button className="searchButton" onClick={() => handleSearch()}>
        Search
      </button>

      <div className="OriginDestinationDisplay">
        {result?.length > 0 ? (
          result.map((element, index) => (
            <DetailDisplay
              key={index}
              originvalue={originvalue}
              destinationvalue={destinationvalue}
              data={element}
            />
          ))
        ) : (
          <SelectMessage message={message} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
