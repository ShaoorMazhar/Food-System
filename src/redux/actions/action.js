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

export const sign_In = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "signIn",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

export const order_item = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "order",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};

export const order_record = (text) => async (dispatch) => {
  try {
    dispatch({
      type: "orderRecord",
      payload: text
    });
  } catch (err) {
    console.log(err);
  }
};
