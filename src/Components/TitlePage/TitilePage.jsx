import React, { useState } from "react";
import Flight from "./Flight/Flight";

const TitlePage = ({ data, sortData, cleare }) => {
  const [sliceCount, setSliceCount] = useState(2);
  let ticketsArray =
    sortData === undefined ||
    sortData.length === 0 ||
    typeof sortData === typeof ""
      ? data
      : sortData;
  if (typeof sortData === typeof "") {
    return (
      <div>
        <h3>{sortData}</h3>
        <button onClick={cleare}>Вывести весь список</button>
      </div>
    );
  } else {
    let flight = (
      sortData === undefined ||
      sortData.length === 0 ||
      typeof sortData === typeof ""
        ? data
        : sortData
    )
      .slice(0, sliceCount)
      .map((item) => {
        return <Flight item={item} key={item.flightToken} />;
      });
    return (
      <div>
        <div>{flight}</div>
        {ticketsArray.length === sliceCount ||
        ticketsArray.length < sliceCount ? null : (
          <button
            onClick={() => {
              setSliceCount(sliceCount + 2);
            }}
          >
            Показать еще
          </button>
        )}
      </div>
    );
  }
};

export default TitlePage;
