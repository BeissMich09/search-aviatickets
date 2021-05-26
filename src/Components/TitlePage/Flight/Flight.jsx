import React from "react";
import style from "./Flight.module.css";
import ThereReturnFlight from "./ThereReturnFlight/ThereReturnFlight";

const Flight = ({ item }) => {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + " ч " + minutes + " мин";
  }
  return (
    <div className={style.ticket}>
      <div className={style.header}>
        <img
          src="https://pluspng.com/img-png/aeroflot-logo-png-aeroflot-russian-airlines-logo-vector-1600.png"
          alt=""
        />
        <div className={style.text}>
          <p>
            {item.flight.price.total.amount}{" "}
            {item.flight.price.total.currencyCode}
          </p>
          <p>Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <ThereReturnFlight
        getTimeFromMins={getTimeFromMins}
        item={item.flight.legs[0]}
      />
      <div className={style.line}></div>
      <ThereReturnFlight
        getTimeFromMins={getTimeFromMins}
        item={item.flight.legs[1]}
      />
      <button>ВЫБРАТЬ</button>
    </div>
  );
};

export default Flight;
