async function submitBarcodeValue(barcodeValue) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "" }),
  };
  fetch("path-to-lambda", requestOptions).then((response) => response.json());
}
