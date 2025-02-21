import "../InventoryView/InventoryView.css";
import { useEffect, useState, useMemo } from "react";
import { getInventoryItems } from "../../services/inventoryDataService";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function InventoryView() {
  const [inventoryData, setData] = useState([]);
  let tableData = null;

  useEffect(() => {
    getInventory();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        id: "isAlcoholic",
        accessorFn: (d) => (d.isAlcoholic ? "Yes" : "No"),
        header: "Is it Alcoholic?",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
    ],
    []
  );

  const data = useMemo(() => inventoryData, [inventoryData]);

  async function getInventory() {
    try {
      const result = await getInventoryItems();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  tableData = useMaterialReactTable({ columns, data }, []);
  return (
    <>
      <section>
        <br></br>
        <br></br>
        <MaterialReactTable table={tableData} className="inventory-display" />
      </section>
    </>
  );
}

export default InventoryView;
