import React from "react";

const Airline = ({
  name,
  stateCheckbox,
  changeStateCheckbox,
  filterAirlineTickets,
  setNewArr,
}) => {
  return (
    <label>
      <input
        onChange={() => {
          changeStateCheckbox();
          setNewArr(filterAirlineTickets(!stateCheckbox));
        }}
        checked={stateCheckbox}
        type="checkbox"
      />
      - {name}
    </label>
  );
};
export default Airline;
