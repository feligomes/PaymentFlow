"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Title from "./components/Title";
import { HEADER_HEIGHT } from "./constants/layout";

const HomePage = () => {
  const router = useRouter();

  const handlePayTotal = () => {
    router.push("/payment");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <section
        style={{
          flexShrink: 0,
          padding: "96px 16px 48px 16px",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title text={"Hi, Taylor"} />
        <p
          style={{
            maxWidth: 376,
            fontFamily: "Arial",
            fontWeight: "400",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          You have 6 medical bills ready from ABC Health System. You can pay
          your bills here or verify your identity to view full bill details.
        </p>
      </section>
      <section
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          borderRadius: "32px 32px 0px 0px",
          padding: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: 376,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Arial",
                fontWeight: "700",
                fontSize: "16px",
                color: "#65657B",
                letterSpacing: "0.2px",
              }}
            >
              Total due
            </h2>
            <span
              style={{
                fontFamily: "Georgia",
                fontSize: "28px",
                fontWeight: "700",
                color: "#13126C",
              }}
              aria-labelledby="total-due"
            >
              $600.00
            </span>
          </div>
          <Button onClick={handlePayTotal} label="Pay total" ariaLabel="Pay total amount of $600.00" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
