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
  isValid: boolean;
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
  const inputId = label.replace(/\s+/g, "-").toLowerCase();
  const errorId = `${inputId}-error`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: maxWidth || "100%",
      }}
    >
      <Label text={label} htmlFor={inputId} />
      <div style={{ position: "relative", maxWidth: maxWidth || "100%" }}>
        <input
          id={inputId}
          type={type}
          {...register}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? errorId : undefined}
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
      {error && <Label text={error.message || ""} id={errorId} error={true} />}
    </div>
  );
};

export default FormField;
