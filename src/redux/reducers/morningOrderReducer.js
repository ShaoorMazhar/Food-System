const initialState = {
  order: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "order":
      return action.payload;
    case "delete":
      return state.order.filter((element) => element !== action.payload);
    default:
      return state;
  }
};
export default orderReducer;
