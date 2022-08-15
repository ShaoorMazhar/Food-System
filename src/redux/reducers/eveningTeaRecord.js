const initialState = {
  record: []
};

const eveningRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "eveningRecord":
      return {
        ...state,
        record: [action.payload]
      };
    default:
      return state;
  }
};
export default eveningRecordReducer;
