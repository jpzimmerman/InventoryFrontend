import axios from "axios";

const BASE_URL = "https://localhost:44375";

const apiService = axios.create({
  baseURL: BASE_URL,
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
