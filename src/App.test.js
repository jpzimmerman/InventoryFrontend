import { render, screen } from "@testing-library/react";
import App from "./App";

test("enter barcode text present", () => {
  render(<App />);
  const linkElement = screen.getByText(/enter barcode value/i);
  expect(linkElement).toBeInTheDocument();
});
