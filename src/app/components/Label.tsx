import React from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
  error?: boolean;
  id?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, error, id }) => (
  <label
    htmlFor={htmlFor}
    id={id}
    style={{
      fontFamily: "Arial",
      fontSize: "14px",
      fontWeight: error ? "400" : "700",
      letterSpacing: "0.2px",
      color: error ? "#C34648" : "#65657B",
    }}
  >
    {text}
  </label>
);

export default Label;
