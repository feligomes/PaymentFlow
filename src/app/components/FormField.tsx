import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";
import Image from "next/image";

interface FormFieldProps {
  label: string;
  type?: string;
  width?: number;
  register: UseFormRegisterReturn;
  error?: { message?: string };
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  width,
  register,
  error,
  maxLength,
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: width || "100%",
      }}
    >
      <Label text={label} />
      <div style={{ position: "relative", width: width || "100%" }}>
        <input
          type={type}
          {...register}
          style={{
            height: 48,
            border: `1px solid ${error ? "#C34648" : "#6D7088"}`,
            padding: "12px 16px",
            borderRadius: "8px",
            width: "100%",
          }}
          onInput={handleInput}
        />
        {error && (
          <div
            style={{
              position: "absolute",
              right: "16px",
              top: "12px",
            }}
          >
            <Image src="/VisaLogo.svg" alt="ErrorLogo" width={24} height={24} />
          </div>
        )}
      </div>
      {error && <Label text={error.message || ""} error={true} />}
    </div>
  );
};

export default FormField;
