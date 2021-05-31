import React from "react";
import { connect } from "react-redux";
import { cleare, getData, setArrayAirlines } from "../../redux/data-reducer";
import TitlePage from "./TitilePage";

class TitlePageContainer extends React.Component {
  createArrayAirlines = (array) => {
    let newArr = array.map((ticket) => ticket.flight.carrier.caption);
    let arrayAirlinesName = function unique() {
      return Array.from(new Set(newArr));
    };
    return arrayAirlinesName();
  };
  componentDidMount() {
    fetch(`/config/flights.json`)
      .then((res) => res.json())

      .then((data) => {
        this.props.getData(data);
      })
      .then(() => {
        this.props.setArrayAirlines(this.createArrayAirlines(this.props.data));
      })
      .catch((error) => console.log(error));
  }

  render() {
    if (
      this.props.data.length === 0 ||
      this.props.data === undefined ||
      this.props.data === null
    ) {
      return <div>Идет загрузка...</div>;
    } else {
      return (
        <TitlePage
          sortData={this.props.sortData}
          data={this.props.data}
          cleare={this.props.cleare}
        />
      );
    }
  }
}
let mapStateToProps = (state) => {
  return {
    data: state.dataReducer.data,
    sortData: state.dataReducer.sortData,
  };
};
export default connect(mapStateToProps, { getData, setArrayAirlines, cleare })(
  TitlePageContainer
);
