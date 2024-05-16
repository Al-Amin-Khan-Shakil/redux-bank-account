import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    },
    withdraw(state, action) {
      if (action.payload < 0) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (action.payload.amount < 0) return state;
        if (state.loan > 0) return state;

        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      },
    },
    payLoan(state) {
      if (state.balance < state.loan) {
        return {
          ...state,
          loan: state.loan - state.balance,
          balance: 0,
        };
      }
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: '',
      };
    },
    convertingCurrency(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const deposit = (amount, currency) => {
  if (currency === 'USD') {
    return { type: 'account/deposit', payload: amount };
  }

  return async (dispatch) => {
    dispatch({ type: 'account/convertingCurrency' });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: 'account/deposit', payload: converted });
  };
};

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
