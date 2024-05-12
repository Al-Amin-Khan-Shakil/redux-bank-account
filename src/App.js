import "./App.css";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="App">
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
    </div>
  );
}

export default App;
