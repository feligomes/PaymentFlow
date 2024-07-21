"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../components/Button";
import Label from "../components/Label";
import SectionTitle from "../components/SectionTitle";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { cleanFormData } from "../store/formSlice";

const ReviewPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { formData } = useAppSelector((state) => state.form);

  const handleEdit = () => {
    router.push("/payment");
  };

  const handlePay = () => {
    router.push("/success");
    dispatch(cleanFormData());
  };

  return (
    <div className="flex justify-center items-center sm:h-full h-auto sm:items-center">
      <div
        className="w-full max-w-xl bg-white sm:py-4 border-b sm:border-0 sm:rounded-2xl"
      >
        <div
          className="py-5 px-8 sm:px-12"
          style={{
            borderBottom: "1px solid #E7E9EF",
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <SectionTitle
              step={1}
              title="Payment information"
              isCompleted={true}
            />
            <Button onClick={handleEdit} label="Edit" link={true} />
          </div>
        </div>

        <div className="flex flex-col py-5 px-8 sm:px-12">
          <SectionTitle step={2} title="Review and pay" />
          <span
            style={{
              marginTop: "20px",
              marginBottom: "29px",
              fontFamily: "Arial",
              fontSize: "20px",
              letterSpacing: "0.2px",
              fontWeight: "400",
            }}
          >
            You’re about to make a payment of <b>$600.00</b>
          </span>
          <Label text={"Payment method"} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              alignItems: "center",
              marginTop: "4px",
            }}
          >
            <Image src="/VisaLogo.svg" alt="VisaLogo" width={24} height={17} />
            <span>Card ending in ••••{formData?.cardNumber?.slice(-4)}</span>
          </div>
          <div style={{ marginTop: "48px", marginBottom: "16px" }}>
            <Button onClick={handlePay} label="Pay $600.00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
