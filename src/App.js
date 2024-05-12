import { useSelector } from 'react-redux';
import './App.css';
import AccountOperations from './components/AccountOperations';
import BalanceDisplay from './components/BalanceDisplay';
import CreateCustomer from './components/CreateCustomer';
import Customer from './components/Customer';

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="App">
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
