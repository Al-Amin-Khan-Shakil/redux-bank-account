import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from '../slices/accountSlice';

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('USD');
  const {
    loan,
    balance,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account);

  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));

    setDepositAmount('');
    setCurrency('USD');
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;

    if (balance < withdrawalAmount) {
      dispatch(withdraw(balance));
    } else {
      dispatch(withdraw(withdrawalAmount));
    }

    setWithdrawalAmount('');
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));

    setLoanAmount('');
    setLoanPurpose('');
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">
            <span>Deposit</span>

            <input
              id="deposit"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
            />
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button onClick={handleDeposit} type="button" disabled={isLoading}>
            Deposit
            {' '}
            {depositAmount}
          </button>
        </div>
        <div>
          <label htmlFor="withdraw">
            <span>Withdraw</span>
            <input
              id="withdraw"
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(+e.target.value)}
            />
          </label>
          <button onClick={handleWithdrawal} type="button">
            WithDraw
            {' '}
            {withdrawalAmount}
          </button>
        </div>
        <div>
          <label htmlFor="loan">
            <span>Request loan</span>
            <input
              id="loan"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
          </label>
          <button onClick={handleRequestLoan} type="button">
            {' '}
            Request loan
          </button>
        </div>
        {loan > 0 && (
          <div>
            <span style={{ color: 'red' }}>
              Pay back $
              {loan}
              {' '}
              {currentLoanPurpose}
            </span>
            {' '}
            <button onClick={handlePayLoan} type="button">
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
