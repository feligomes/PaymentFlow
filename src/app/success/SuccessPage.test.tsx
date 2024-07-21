import React from "react";
import { render, screen } from "@testing-library/react";
import SuccessPage from "./SuccessPage";

test("renders SuccessPage with thank you message", () => {
  render(<SuccessPage />);

  expect(screen.getByText("Thank you for your payment!")).toBeInTheDocument();
});
