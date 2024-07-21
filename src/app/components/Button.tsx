import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  link?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, link = false }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: link ? "white" : "#3667E9",
      color: link ? "#3667E9" : "white",
      fontWeight: "700",
      fontFamily: "Arial",
      fontSize: "16px",
      borderRadius: "12px",
      height: link ? 24 : 48,
      letterSpacing: "0.2px",
      width: link ? "auto" : "100%",
    }}
  >
    {label}
  </button>
);

export default Button;
