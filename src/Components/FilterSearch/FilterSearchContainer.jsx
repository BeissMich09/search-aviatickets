import React from "react";
import { connect } from "react-redux";
import {
  getData,
  getSortArr,
  setArrayAirlines,
  setArrayAirlinesTickets,
  setChangeArrayAirlinesTickets,
  setFilterDirect,
  setFilterTransfer,
  setValuesFilterPrice,
} from "../../redux/data-reducer";
import FilterSearch from "./FilterSearch";

class FilterSearchContainer extends React.Component {
  sortArray = (array, value) => {
    let newArrayTickets;
    if (value === 2) {
      newArrayTickets = array.slice().sort(function (a, b) {
        if (+a.flight.price.total.amount > +b.flight.price.total.amount)
          return -1;
        if (+a.flight.price.total.amount < +b.flight.price.total.amount)
          return 1;
        return 0;
      });
    } else if (value === 1) {
      newArrayTickets = array.slice().sort(function (a, b) {
        if (+a.flight.price.total.amount > +b.flight.price.total.amount)
          return 1;
        if (+a.flight.price.total.amount < +b.flight.price.total.amount)
          return -1;
        return 0;
      });
    } else if (value === 3) {
      newArrayTickets = array.slice().sort(function (a, b) {
        if (
          a.flight.legs[0].duration + a.flight.legs[1].duration >
          b.flight.legs[0].duration + b.flight.legs[1].duration
        )
          return 1;
        if (
          a.flight.legs[0].duration + a.flight.legs[1].duration <
          b.flight.legs[0].duration + b.flight.legs[1].duration
        )
          return -1;
        return 0;
      });
    }
    return newArrayTickets;
  };

  filterArrayTickets = (direct, transfer) => {
    let filterTickets;
    const array =
      this.props.sortData === undefined ||
      this.props.sortData.length === 0 ||
      typeof this.props.sortData.length === typeof ""
        ? this.props.data
        : this.props.sortData;
    if (direct === true && transfer === false) {
      filterTickets = array.filter((item) => {
        return item.flight.legs[0].segments.length === 1;
      });
    } else if (direct === false && transfer === true) {
      return (filterTickets = array.filter((item) => {
        return item.flight.legs[0].segments.length === 2;
      }));
    } else if ((direct && transfer) || direct === transfer) {
      filterTickets = array;
    }
    return filterTickets === undefined || filterTickets.length === 0
      ? "По такому запросу нет билетов!"
      : filterTickets;
  };

  filterPrice = (array, from, before) => {
    let ticketsFilterPrice;
    ticketsFilterPrice = array.filter((item) => {
      return (
        +item.flight.price.total.amount >= +from &&
        +item.flight.price.total.amount <= +before
      );
    });
    return ticketsFilterPrice;
  };

  render() {
    return (
      <FilterSearch
        getData={this.props.getData}
        sortArray={this.sortArray}
        value={this.props.value}
        data={this.props.data}
        getSortArr={this.props.getSortArr}
        filter={this.props.filter}
        setFilterDirect={this.props.setFilterDirect}
        setFilterTransfer={this.props.setFilterTransfer}
        filterArrayTickets={this.filterArrayTickets}
        sortData={this.props.sortData}
        setValuesFilterPrice={this.props.setValuesFilterPrice}
        filterPriceValue={this.props.filterPriceValue}
        filterPrice={this.filterPrice}
        arrayAirlines={this.props.arrayAirlines}
        setArrayAirlinesTickets={this.props.setArrayAirlinesTickets}
        arrayAirlinesTickets={this.props.arrayAirlinesTickets}
        setChangeArrayAirlinesTickets={this.props.setChangeArrayAirlinesTickets}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.dataReducer.value,
    data: state.dataReducer.data,
    sortData: state.dataReducer.sortData,
    filter: state.dataReducer.filter,
    filterPriceValue: state.dataReducer.filterPriceValue,
    arrayAirlines: state.dataReducer.arrayAirlines,
  };
};
export default connect(mapStateToProps, {
  getData,
  getSortArr,
  setFilterDirect,
  setFilterTransfer,
  setValuesFilterPrice,
  setArrayAirlines,
  setChangeArrayAirlinesTickets,
  setArrayAirlinesTickets,
})(FilterSearchContainer);
