import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";

interface FormFieldProps {
  label: string;
  type?: string;
  width?: number;
  register: UseFormRegisterReturn;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  width,
  register,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: width || "100%",
    }}
  >
    <Label text={label}/>
    <input
      type={type}
      {...register}
      style={{
        height: 48,
        border: "1px solid #6D7088",
        padding: "12px 16px",
        borderRadius: "8px",
      }}
    />
  </div>
);

export default FormField;
