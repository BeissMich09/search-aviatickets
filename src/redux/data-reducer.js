const GET_DATA = "GET_DATA";
const GET_SORT_ARRAY = "GET_SORT_ARRAY";
const SET_VALUE_DIRECT = "SET_VALUE_DIRECT";
const SET_VALUE_TRANSFER = "SET_VALUE_TRANSFER";

let initialeState = {
  data: [],
  value: false,
  sortData: [],
  filter: { direct: false, transfer: false },
};

const dataReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        // data: action.data.result.flights.slice(0, 5),
        data: action.data.result.flights,
      };
    case GET_SORT_ARRAY:
      return {
        ...state,
        sortData: action.array,
        value: action.value,
      };
    case SET_VALUE_DIRECT:
      return {
        ...state,
        filter: { ...state.filter, direct: action.value },
        sortData: action.array,
      };
    case SET_VALUE_TRANSFER:
      return {
        ...state,
        filter: { ...state.filter, transfer: action.value },
        sortData: action.array,
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
export const setFilterDirect = (value, array) => {
  return {
    type: SET_VALUE_DIRECT,
    value,
    array,
  };
};
export const setFilterTransfer = (value, array) => {
  return {
    type: SET_VALUE_TRANSFER,
    value,
    array,
  };
};
export const getSortArr = (array, value) => {
  return {
    type: GET_SORT_ARRAY,
    array,
    value,
  };
};

export default dataReducer;
