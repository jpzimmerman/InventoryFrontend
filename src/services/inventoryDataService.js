import axios from "axios";

const BASE_URL = "https://localhost:44375";

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const getInventoryItems = async () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://localhost/",
    },
  };

  return await apiService
    .get("api/Inventory/GetInventoryItems", config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const submitInventoryItem = async (item) => {
  await apiService
    .patch("api/Inventory/SubmitInventoryItem", item)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
