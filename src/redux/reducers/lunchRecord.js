const initialState = {
  record: []
};

const lunchRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "lunchRecord":
      return {
        ...state,
        record: [action.payload]
      };
    default:
      return state;
  }
};
export default lunchRecordReducer;
