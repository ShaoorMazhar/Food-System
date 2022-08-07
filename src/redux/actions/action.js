export const sign_up = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "signUp",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
