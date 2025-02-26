import "./App.css";
import InputBar from "./components/InputBar/InputBar";
import InventoryView from "./components/InventoryView/InventoryView";

function App() {
  return (
    <>
      <div className="card">
        <h1>Bar Inventory</h1>
        <InputBar></InputBar>
        <hr></hr>
        <InventoryView></InventoryView>
      </div>
    </>
  );
}

export default App;
