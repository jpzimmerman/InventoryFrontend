import { useState } from "react";
import "../InputBar/InputBar.css";
import { addInventoryItem } from "../../services/inventoryDataService";

function InputBar() {
  const [inputValue, setValue] = useState("");
  const [error, setError] = useState("");

  const inputTextChanged = (event) => {
    setValue(event.target.value);
  };

  const inputBarSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setError("Input value cannot be empty");
      return;
    } else {
      addInventoryItem({ name: inputValue });
      setError("");
    }
  };

  return (
    <>
      <section>
        <form onSubmit={inputBarSubmit}>
          <input
            type="text"
            id="inputTerm"
            className="input-bar"
            value={inputValue}
            placeholder="Enter iten name or barcode"
            onChange={inputTextChanged}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p className="error-text">
            <i className="fa-solid fa-xmark"></i>
            {error}
          </p>
        )}
      </section>
    </>
  );
}

export default InputBar;
