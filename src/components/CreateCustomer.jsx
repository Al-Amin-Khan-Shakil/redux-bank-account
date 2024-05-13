import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer } from '../slices/customerSlice';

function CreateCustomer() {
  const [fullName, setFullName] = useState('');
  const [nationalId, setNationalId] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="full-name">
            <span>Customer full name</span>
            <input
              value={fullName}
              id="full-name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="national-id">
            <span>National ID</span>
            <input
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </label>
        </div>
        <button type="button" onClick={handleClick}>
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
