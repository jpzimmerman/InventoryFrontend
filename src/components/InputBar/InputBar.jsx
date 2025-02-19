import "../InputBar/InputBar.css";

function InputBar() {
  return (
    <>
      <div>
        <input type="text" id="inputTerm" className="input-bar" />
        <button className="submit-button">Submit</button>
      </div>
    </>
  );
}

export default InputBar;
