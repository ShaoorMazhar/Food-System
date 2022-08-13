import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import signUpReducer from "../reducers/signUpReducer";
import signInReducer from "../reducers/signInReducer";
import orderReducer from "../reducers/morningOrderReducer";
import orderRecordReducer from "../reducers/morningTeaRecord";
import eveningRecordReducer from "../reducers/eveningTeaRecord";
import lunchOrderReducer from "../reducers/lunchOrderReducer";
import eveningOrderReducer from "../reducers/eveningOrderReducer";
import lunchRecordReducer from "../reducers/lunchRecord";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];

const Reducer = combineReducers({
  record: orderRecordReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  order: orderReducer,
  lunch: lunchRecordReducer,
  evening: eveningRecordReducer,
  lunchOrder: lunchOrderReducer,
  eveningOrder: eveningOrderReducer
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
