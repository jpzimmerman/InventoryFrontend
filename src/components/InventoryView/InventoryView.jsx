import "../InventoryView/InventoryView.css";
import { useEffect } from "react";
import { getInventoryItems } from "../../services/inventoryDataService";

function InventoryView() {
  let inventoryData = useEffect(() => {
    getInventoryItems();
  }, []);

  return (
    <>
      <div>
        <p>{inventoryData}</p>
      </div>
    </>
  );
}

export default InventoryView;
