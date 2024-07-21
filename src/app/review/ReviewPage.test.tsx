import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import ReviewPage from "./ReviewPage";
import { cleanFormData } from "../store/formSlice";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../hooks/useAppSelector", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("../hooks/useAppDispatch", () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock("../store/formSlice", () => ({
  cleanFormData: jest.fn(),
}));

test("renders ReviewPage and handles navigation and dispatch correctly", () => {
  const push = jest.fn();
  const dispatch = jest.fn();

  (useRouter as jest.Mock).mockReturnValue({ push });
  (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  (useAppSelector as jest.Mock).mockReturnValue({
    formData: { cardNumber: "1234567812345678" },
  });

  render(<ReviewPage />);

  expect(screen.getByText("Payment information")).toBeInTheDocument();
  expect(screen.getByText("Review and pay")).toBeInTheDocument();
  expect(screen.getByText("Card ending in ••••5678")).toBeInTheDocument();

  const editButton = screen.getByRole("button", {
    name: /Edit payment information/i,
  });
  const payButton = screen.getByRole("button", {
    name: /Proceed to payment and complete transaction/i,
  });

  expect(editButton).toBeInTheDocument();
  expect(payButton).toBeInTheDocument();

  fireEvent.click(editButton);
  expect(push).toHaveBeenCalledWith("/payment");

  fireEvent.click(payButton);
  expect(push).toHaveBeenCalledWith("/success");
  expect(dispatch).toHaveBeenCalledWith(cleanFormData());
});
