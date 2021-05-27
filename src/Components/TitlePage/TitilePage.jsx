import React from "react";
import Flight from "./Flight/Flight";

const TitlePage = ({ data, sortData }) => {
  let flight = (
    sortData === undefined || sortData.length === 0 ? data : sortData
  ).map((item) => {
    return <Flight item={item} key={item.flightToken} />;
  });
  return <div> {flight}</div>;
};

export default TitlePage;
