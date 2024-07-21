"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "./components/Button";
import Title from "./components/Title";

const HomePage = () => {
  const router = useRouter();

  const handlePayTotal = () => {
    router.push("/payment");
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 96,
            paddingBottom: 48,
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Title text={"Hi, Taylor"} />
          <span
            style={{
              width: 376,
              fontFamily: "Arial",
              fontWeight: "400",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            You have 6 medical bills ready from ABC Health System. You can pay
            your bills here or verify your identity to view full bill details.
          </span>
        </div>
      </div>
      <div
        style={{
          //TODO change this to make it full height of rest of page
          height: "58%",
          backgroundColor: "white",
          borderRadius: "32px 32px 0px 0px",
          padding: "32px",
          position: "fixed",
          bottom: "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: 376,
            margin: "auto",
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
            {/* TODO Make reusable component  */}
            <span
              style={{
                fontFamily: "Georgia",
                fontSize: "28px",
                fontWeight: "700",
                color: "#13126C",
              }}
            >
              $600.00
            </span>
          </div>
          <Button onClick={() => handlePayTotal()} label="Pay total" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
