import React from "react";
import Airline from "./Airline";

class AirlineContainer extends React.Component {
  state = {
    [this.props.name]: false,
    newArr: [],
  };
  changeStateCheckbox = () => {
    this.setState({ [this.props.name]: !this.state[[this.props.name]] });
  };

  setNewArr = (array) => {
    this.setState({ newArr: array });
  };
  filterAirlineTickets = (value) => {
    let newArrTickets;
    if (value) {
      newArrTickets = this.props.data.filter((ticket) => {
        return ticket.flight.carrier.caption === this.props.name;
      });
      this.props.setArrayAirlinesTickets(newArrTickets);
    } else {
      newArrTickets = 0;
      let newChangeArrTickets = this.props.sortData.filter((ticket) => {
        return ticket.flight.carrier.caption !== this.props.name;
      });
      this.props.setChangeArrayAirlinesTickets(newChangeArrTickets);
    }
    return newArrTickets;
  };

  render() {
    return (
      <Airline
        stateCheckbox={this.state[this.props.name]}
        name={this.props.name}
        changeStateCheckbox={this.changeStateCheckbox}
        filterAirlineTickets={this.filterAirlineTickets}
        setNewArr={this.setNewArr}
      />
    );
  }
}

export default AirlineContainer;
