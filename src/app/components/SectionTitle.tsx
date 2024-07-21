import React from "react";

interface SectionTitleProps {
  step: number;
  title: string;
  isInactive?: boolean;
  isCompleted?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  step,
  title,
  isInactive = false,
  isCompleted = false,
}) => (
  <div
    role="heading"
    aria-level={2}
    aria-current={isInactive ? "false" : "true"}
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      alignItems: "center",
      opacity: isInactive ? "0.5" : "1",
    }}
  >
    <div
      style={{
        backgroundColor: isCompleted || isInactive ? "#E7E9EF" : "#3667E9",
        height: 24,
        width: 24,
        color: "white",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "Arial",
          fontSize: "16px",
          fontWeight: "700",
          color: isCompleted ? "#65657B" : isInactive ? "#65657B" : "white",
        }}
      >
        {step}
      </span>
    </div>
    <h2
      tabIndex={0}
      style={{
        fontFamily: "Arial",
        fontSize: "20px",
        letterSpacing: "0.2px",
        color: "#171731",
        fontWeight: "700",
      }}
    >
      {title}
    </h2>
  </div>
);

export default SectionTitle;
