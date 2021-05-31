import React from "react";
import AirlineContainer from "./Airline/AirlineContainer";
import style from "./FilterSearch.module.css";

const FilterSearch = ({
  value,
  sortArray,
  filter,
  data,
  getSortArr,
  setFilterDirect,
  setFilterTransfer,
  filterArrayTickets,
  sortData,
  filterPriceValue,
  setValuesFilterPrice,
  filterPrice,
  arrayAirlines,
  setArrayAirlinesTickets,
  arrayAirlinesTickets,
  setChangeArrayAirlinesTickets,
}) => {
  const airlineName = arrayAirlines.map((name, index) => (
    <AirlineContainer
      arrayAirlinesTickets={arrayAirlinesTickets}
      setArrayAirlinesTickets={setArrayAirlinesTickets}
      setChangeArrayAirlinesTickets={setChangeArrayAirlinesTickets}
      sortData={sortData}
      key={index}
      name={name}
      data={data}
    />
  ));
  return (
    <div className={style.filter_search}>
      <div>
        <h6>Сортировать</h6>
        <div className={style.radios}>
          <label>
            <input
              type="radio"
              name="sort"
              value="1"
              checked={+value === 1 ? true : false}
              onChange={() => {
                getSortArr(
                  sortArray(
                    sortData === undefined || sortData.length === 0
                      ? data
                      : sortData,
                    1
                  ),
                  1
                );
              }}
            />
            - по возрастанию цены
          </label>
          <label>
            <input
              value="2"
              checked={+value === 2 ? true : false}
              type="radio"
              name="sort"
              onChange={() => {
                getSortArr(
                  sortArray(
                    sortData === undefined || sortData.length === 0
                      ? data
                      : sortData,
                    2
                  ),
                  2
                );
              }}
            />{" "}
            - по убыванию цены
          </label>
          <label>
            <input
              value="3"
              checked={+value === 3 ? true : false}
              type="radio"
              name="sort"
              onChange={() => {
                getSortArr(
                  sortArray(
                    sortData === undefined || sortData.length === 0
                      ? data
                      : sortData,
                    3
                  ),
                  3
                );
              }}
            />
            - по времени в пути
          </label>
        </div>
      </div>
      <div>
        <h6>Фильтровать</h6>
        <div className={style.checkboxes}>
          <label>
            <input
              type="checkbox"
              checked={filter.transfer}
              onChange={() => {
                setFilterTransfer(
                  !filter.transfer,
                  filterArrayTickets(filter.direct, !filter.transfer)
                );
              }}
            />
            - 1 пересадка
          </label>
          <label>
            <input
              checked={filter.direct}
              onChange={() => {
                setFilterDirect(
                  !filter.direct,
                  filterArrayTickets(!filter.direct, filter.transfer)
                );
              }}
              type="checkbox"
            />{" "}
            - без пересадок
          </label>
        </div>
      </div>
      <div>
        <h6>Цена</h6>
        <div>
          <p>
            От
            <input
              type="text"
              onChange={(e) => {
                setValuesFilterPrice("from", e.target.value);
              }}
              value={filterPriceValue.from}
            />
          </p>
          <p>
            До{" "}
            <input
              type="text"
              onChange={(e) => {
                setValuesFilterPrice("before", e.target.value);
              }}
              value={filterPriceValue.before}
              onBlur={() => {
                getSortArr(
                  filterPrice(
                    sortData === undefined || sortData.length === 0
                      ? data
                      : sortData,
                    filterPriceValue.from,
                    filterPriceValue.before
                  )
                );
              }}
            />
          </p>
        </div>
      </div>
      <div>
        <h6>Авиакомпании</h6>
        <div className={style.airlines_name}>{airlineName}</div>
      </div>
    </div>
  );
};
export default FilterSearch;
