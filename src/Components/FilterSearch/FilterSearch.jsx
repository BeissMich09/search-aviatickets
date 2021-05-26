import React from "react";

const FilterSearch = () => {
  return (
    <div>
      <div>
        <h6>Сортировать</h6>
        <div>
          <p>
            <input type="radio" name="sort" value="rad1" /> - по возрастанию
            цены
          </p>
          <p>
            <input type="radio" name="sort" value="rad2" /> - по убыванию цены
          </p>
          <p>
            <input type="radio" name="sort" value="rad3" /> - по времени в пути
          </p>
        </div>
      </div>
      <div>
        <h6>Фильтровать</h6>
        <div>
          <p>
            <input type="checkbox" /> - 1 пересадка
          </p>
          <p>
            <input type="checkbox" /> - без пересадок
          </p>
        </div>
      </div>
      <div>
        <h6>Цена</h6>
        <div>
          <p>
            От <input type="text" />
          </p>
          <p>
            До <input type="text" />
          </p>
        </div>
      </div>
      <div>
        <h6>Авиакомпании</h6>
        <div>
          <p>
            <input type="checkbox" /> - Имя компании
          </p>
          <p>
            <input type="checkbox" /> - Имя компании
          </p>
        </div>
      </div>
    </div>
  );
};
export default FilterSearch;
