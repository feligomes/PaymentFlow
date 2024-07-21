import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";
import Image from "next/image";

interface FormFieldProps {
  label: string;
  type?: string;
  maxWidth?: number;
  register: UseFormRegisterReturn;
  error?: { message?: string };
  maxLength?: number;
  isValid: boolean; // New prop to indicate if the field is valid
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  maxWidth,
  register,
  error,
  maxLength,
  isValid,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: maxWidth || "100%",
      }}
    >
      <Label text={label} />
      <div style={{ position: "relative", maxWidth: maxWidth || "100%" }}>
        <input
          type={type}
          {...register}
          maxLength={maxLength}
          style={{
            height: 48,
            border: `1px solid ${error ? "#C34648" : "#6D7088"}`,
            padding: "12px 16px",
            borderRadius: "8px",
            width: "100%",
          }}
        />
        {isValid && !error && (
          <div
            style={{
              position: "absolute",
              right: "16px",
              top: "12px",
            }}
          >
            <Image src="/Check.svg" alt="Valid" width={24} height={24} />
          </div>
        )}
        {error && (
          <div
            style={{
              position: "absolute",
              right: "16px",
              top: "12px",
            }}
          >
            <Image src="/AlertCircle.svg" alt="Error" width={24} height={24} />
          </div>
        )}
      </div>
      {error && <Label text={error.message || ""} error={true} />}
    </div>
  );
};

export default FormField;
