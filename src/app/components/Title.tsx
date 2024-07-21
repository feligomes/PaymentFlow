import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <h1
    style={{
      fontFamily: "Georgia",
      fontSize: "28px",
      fontWeight: "700",
      color: "#13126C",
    }}
  >
    {text}
  </h1>
);

export default Title;

