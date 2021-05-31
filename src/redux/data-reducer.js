const GET_DATA = "GET_DATA";
const GET_SORT_ARRAY = "GET_SORT_ARRAY";
const SET_VALUE_DIRECT = "SET_VALUE_DIRECT";
const SET_VALUE_TRANSFER = "SET_VALUE_TRANSFER";
const SET_VALUES_FILTER_PRICE = "SET_VALUES_FILTER_PRICE";
const SET_ARRAY_AIRLINES = "SET_ARRAY_AIRLINES";
const SET_AIRLINE_FILTER_TICKETS = "SET_AIRLINE_FILTER_TICKETS";
const SET_AIRLINE_CHANGE_FILTER_TICKETS = "SET_AIRLINE_CHANGE_FILTER_TICKETS";
const CLEARE = "CLEARE";

let initialeState = {
  data: [],
  value: false,
  sortData: [],
  filter: { direct: false, transfer: false },
  filterPriceValue: { from: "", before: "" },
  arrayAirlines: [],
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
    case SET_VALUES_FILTER_PRICE:
      return {
        ...state,
        filterPriceValue: {
          ...state.filterPriceValue,
          [action.name]: action.value,
        },
      };
    case SET_ARRAY_AIRLINES:
      return {
        ...state,
        arrayAirlines: action.arrayAirlines,
      };

    case SET_AIRLINE_FILTER_TICKETS:
      let newArr = state.sortData.concat(action.arrayTickets);
      return {
        ...state,
        sortData: newArr,
      };
    case SET_AIRLINE_CHANGE_FILTER_TICKETS:
      return {
        ...state,
        sortData: action.arrayTickets,
      };
    case CLEARE:
      return {
        ...state,
        value: false,
        sortData: [],
        filter: { direct: false, transfer: false },
        filterPriceValue: { from: "", before: "" },
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

export const setValuesFilterPrice = (name, value) => {
  return {
    type: SET_VALUES_FILTER_PRICE,
    name,
    value,
  };
};
export const setArrayAirlines = (arrayAirlines) => {
  return {
    type: SET_ARRAY_AIRLINES,
    arrayAirlines,
  };
};

export const setArrayAirlinesTickets = (arrayTickets) => {
  return {
    type: SET_AIRLINE_FILTER_TICKETS,
    arrayTickets,
  };
};
export const setChangeArrayAirlinesTickets = (arrayTickets) => {
  return {
    type: SET_AIRLINE_CHANGE_FILTER_TICKETS,
    arrayTickets,
  };
};

export const cleare = () => {
  return { type: CLEARE };
};

export default dataReducer;
