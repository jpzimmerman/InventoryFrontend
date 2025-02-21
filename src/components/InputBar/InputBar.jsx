import { useState } from "react";
import "../InputBar/InputBar.css";
import { addInventoryItem } from "../../services/inventoryDataService";

function InputBar() {
  const [inputValue, setValue] = useState("");

  const inputTextChanged = (event) => {
    setValue(event.target.value);
  };

  const inputBarSubmit = () => {
    addInventoryItem({ name: inputValue });
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
      </section>
    </>
  );
}

export default InputBar;
