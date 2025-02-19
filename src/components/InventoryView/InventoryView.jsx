import "../InventoryView/InventoryView.css";
import { useEffect, useState } from "react";
import { getInventoryItems } from "../../services/inventoryDataService";
// import { MaterialReactTable } from "material-react-table";

function InventoryView() {
  const [inventoryData, setData] = useState(null);

  async function getInventory() {
    try {
      const result = await getInventoryItems();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <>
      <div>
        <p>Inventory</p>
        <p>{JSON.stringify(inventoryData)}</p>
      </div>
    </>
  );
}

export default InventoryView;
