import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './slices/accountSlice-v2';
import customerReducer from './slices/customerSlice-v2';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
