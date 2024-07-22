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
      className={`flex flex-col`}
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <section
        className={`flex flex-col flex-shrink-0 justify-center items-center gap-4 pt-24 pr-4 pb-12 pl-4 `}
      >
        <Title text={"Hi, Taylor"} />
        <p className="max-w-[376px] font-arial text-center text-[16px] tracking-[0.2px]">
          You have 6 medical bills ready from ABC Health System. You can pay
          your bills here or verify your identity to view full bill details.
        </p>
      </section>
      <section
        className={`flex flex-col grow items-center bg-white rounded-t-[32px] p-8`}
      >
        <div className="flex flex-col gap-6 max-w-[376px] w-full">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-arial font-bold text-[16px] text-custom-gray tracking-[0.2px]">
              Total due
            </h2>
            <span
              className="font-georgia text-[28px] font-bold text-custom-blue"
              aria-labelledby="total-due"
            >
              $600.00
            </span>
          </div>
          <Button
            onClick={handlePayTotal}
            label="Pay total"
            ariaLabel="Pay total amount of $600.00"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
