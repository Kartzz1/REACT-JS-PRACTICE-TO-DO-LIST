import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hotel title", () => {
  render(<App />);
  const title = screen.getByText(/DLSL Hotel Reservation/i);
  expect(title).toBeInTheDocument();
});