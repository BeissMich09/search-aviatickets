import moment from "moment";
import React from "react";
import style from "./Transfer.module.css";

const Transfer = ({ stepFirst, stepSecond, getTimeFromMins, duration }) => {
  const dateDeparture = moment(stepFirst.departureDate);
  const dateArrival = moment(stepFirst.arrivalDate);

  return (
    <div className={style.transfer}>
      <div className={style.city}>
        <div className={style.departure}>
          {stepFirst.departureCity === undefined
            ? stepFirst.departureAirport.caption
            : stepFirst.departureCity.caption}
          , {stepFirst.departureAirport.caption}{" "}
          <p className={style.blue}>({stepFirst.departureAirport.uid})</p>
        </div>
        <div className={style.blue}>→</div>
        <div className={style.arrival}>
          {stepSecond.arrivalCity === undefined
            ? stepSecond.arrivalAirport.caption
            : stepSecond.arrivalCity.caption}
          , {stepSecond.arrivalAirport.caption}{" "}
          <p className={style.blue}>({stepSecond.arrivalAirport.uid})</p>
        </div>
      </div>
      <div className={style.underline}></div>
      <div className={style.date_flight}>
        <p>{dateDeparture.format("llll")}</p>
        <p>{getTimeFromMins(duration)}</p>
        <p>{dateArrival.format("llll")}</p>
      </div>
      <div className={style.transfer_line_container}>
        <div className={style.line_transfer}></div>
        <p>1 пересадка</p>
        <div className={style.line_transfer}></div>
      </div>
      <div className={style.airline_name}>
        Рейс выполняет: {stepFirst.airline.caption}
      </div>
    </div>
  );
};
export default Transfer;
