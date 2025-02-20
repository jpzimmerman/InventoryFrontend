import { useState } from "react";
import "../InputBar/InputBar.css";

function InputBar() {
  const [inputValue, setValue] = useState("");

  const inputTextChanged = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="inputTerm"
          className="input-bar"
          value={inputValue}
          placeholder="Enter iten name or barcode"
          onChange={inputTextChanged}
        />
        <button className="submit-button">Submit</button>
      </div>
    </>
  );
}

export default InputBar;
