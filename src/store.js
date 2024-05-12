import { combineReducers, createStore } from "redux";
import accountReducer from "./slices/accountSlice";
import customerReducer from "./slices/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
