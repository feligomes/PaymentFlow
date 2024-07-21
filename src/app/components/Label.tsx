import React from "react";

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <label
    style={{
      fontFamily: "Arial",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "0.2px",
      color: "#65657B",
    }}
  >
    {text}
  </label>
);

export default Label;


