import React from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/data-reducer";
import TitlePage from "./TitilePage";

class TitlePageContainer extends React.Component {
  componentDidMount() {
    fetch(`/config/flights.json`)
      .then((res) => res.json())

      .then((data) => {
        this.props.getData(data);
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
      return <TitlePage data={this.props.data} />;
    }
  }
}
let mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.dataReducer.data,
  };
};
export default connect(mapStateToProps, { getData })(TitlePageContainer);
