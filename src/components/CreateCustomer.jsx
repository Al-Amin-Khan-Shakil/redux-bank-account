import { useState } from "react";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="full-name">
            Customer full name
            <input
              value={fullName}
              id="full-name"
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="national-id">
            National ID
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
