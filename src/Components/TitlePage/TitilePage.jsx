import React from "react";
import Flight from "./Flight/Flight";

const TitlePage = ({ data }) => {
  let flight = data.map((item) => {
    return <Flight item={item} key={item.flightToken} />;
  });
  return <div> {flight}</div>;
};

export default TitlePage;
