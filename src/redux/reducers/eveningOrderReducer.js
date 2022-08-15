const initialState = {
  order: []
};

const eveningOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "orderTea":
      return action.payload;
    case "deleteTea":
      return state.order.filter((element) => element !== action.payload);
    default:
      return state;
  }
};
export default eveningOrderReducer;
