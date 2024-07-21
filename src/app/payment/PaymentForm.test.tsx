import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import PaymentForm from "./PaymentForm";
import { useRouter } from "next/navigation";
import { saveFormData } from "../store/formSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

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
  saveFormData: jest.fn(),
}));

test("renders PaymentForm and handles submission correctly", async () => {
  const push = jest.fn();
  const dispatch = jest.fn();

  (useRouter as jest.Mock).mockReturnValue({ push });
  (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  (useAppSelector as jest.Mock).mockReturnValue({
    formData: {
      cardNumber: "1234567812345678",
      expiry: "12/34",
      cvv: "123",
      name: "John Doe",
      zip: "12345",
    },
  });

  await act(async () => {
    render(<PaymentForm />);
  });

  expect(screen.getByLabelText("Card number")).toBeInTheDocument();
  expect(screen.getByLabelText("Expires (MM/YY)")).toBeInTheDocument();
  expect(screen.getByLabelText("Security code (CVV)")).toBeInTheDocument();
  expect(screen.getByLabelText("Name on card")).toBeInTheDocument();
  expect(screen.getByLabelText("ZIP code")).toBeInTheDocument();

  await act(async () => {
    fireEvent.change(screen.getByLabelText("Card number"), {
      target: { value: "1234567812345678" },
    });
    fireEvent.change(screen.getByLabelText("Expires (MM/YY)"), {
      target: { value: "12/34" },
    });
    fireEvent.change(screen.getByLabelText("Security code (CVV)"), {
      target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText("Name on card"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("ZIP code"), {
      target: { value: "12345" },
    });
  });

  const continueButton = screen.getByRole("button", {
    name: /Proceed to the review step/i,
  });

  await act(async () => {
    fireEvent.click(continueButton);
  });

  expect(dispatch).toHaveBeenCalledWith(
    saveFormData({
      cardNumber: "1234567812345678",
      expiry: "12/34",
      cvv: "123",
      name: "John Doe",
      zip: "12345",
    })
  );

  expect(push).toHaveBeenCalledWith("/review");
});

test("does not redirect and shows error when required field is missing", async () => {
  const push = jest.fn();
  const dispatch = jest.fn();

  (useRouter as jest.Mock).mockReturnValue({ push });
  (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  (useAppSelector as jest.Mock).mockReturnValue({
    formData: {
      cardNumber: "1234567812345678",
      expiry: "12/34",
      cvv: "123",
      name: "", 
      zip: "12345",
    },
  });

  await act(async () => {
    render(<PaymentForm />);
  });

  const continueButton = screen.getByRole("button", {
    name: /Proceed to the review step/i,
  });

  await act(async () => {
    fireEvent.click(continueButton);
  });

  expect(dispatch).not.toHaveBeenCalled();
  expect(push).not.toHaveBeenCalled();

  expect(screen.getByText(/This field is required/i)).toBeInTheDocument();

  const errorIcon = screen.getAllByRole("img", { name: "Error" });
  expect(errorIcon).toHaveLength(1); 
});
