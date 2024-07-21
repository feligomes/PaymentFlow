import React from "react";
import Title from "../components/Title";

const SuccessPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "96px",
        }}
      >
        <Title text={"Thank you for your payment!"} />
      </div>
    </div>
  );
};

export default SuccessPage;
