import { useState } from 'react';

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('');

  const handleDeposit = () => {};

  const handleWithdrawal = () => {};

  const handleRequestLoan = () => {};

  const handlePayLoan = () => {};

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">
            Deposit
            {' '}
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
          <button onClick={handleDeposit} type="button">
            Deposit
            {depositAmount}
          </button>
        </div>
        <div>
          <label htmlFor="withdraw">
            Withdraw
            {' '}
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
            Request loan
            {' '}
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
        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan} type="button">
            Pay loan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
