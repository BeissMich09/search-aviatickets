const GET_DATA = "GET_DATA";

let initialeState = {
  data: [],
};

const dataReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log(action.data);
      return {
        ...state,
        // data: action.data.result.flights.slice(0, 5),
        data: action.data.result.flights,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getData = (data) => {
  return {
    type: GET_DATA,
    data,
  };
};

export default dataReducer;
