const initialState = {
  signIn: []
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signIn":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};
export default signInReducer;
