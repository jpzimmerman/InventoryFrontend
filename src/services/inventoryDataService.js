import axios from "axios";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_DATA_SERVICE_BASE_URL,
});
const config = {
  headers: {
    "Access-Control-Allow-Origin": "https://localhost/",
    "Access-Control-Allow-Methods": "GET,PUT",
  },
};

export const getInventoryItems = async () => {
  return await apiService
    .get("api/Inventory/GetInventoryItems", config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const addInventoryItem = async (item) => {
  await apiService
    .put("api/Inventory/AddInventoryItem", item, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
