import React from "react";
import style from "./ThereReturnFlight.module.css";

import Transfer from "./Transfer/Transfer";
import DirectFlight from "./DirectFlight/DirectFlight";

const ThereReturnFlight = ({ item, getTimeFromMins }) => {
  return (
    <div>
      {item.segments.length === 1 ? (
        <DirectFlight
          getTimeFromMins={getTimeFromMins}
          item={item.segments[0]}
          duration={item.duration}
        />
      ) : (
        <Transfer
          duration={item.duration}
          stepFirst={item.segments[0]}
          stepSecond={item.segments[1]}
          getTimeFromMins={getTimeFromMins}
        />
      )}
    </div>
  );
};

export default ThereReturnFlight;
