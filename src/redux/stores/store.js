import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import signUpReducer from "../reducers/signUpReducer";
import signInReducer from "../reducers/signInReducer";
import orderReducer from "../reducers/orderReducer";
import orderRecordReducer from "../reducers/orderRecord";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];

const Reducer = combineReducers({
  record: orderRecordReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  order: orderReducer
});
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
