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

  console.log("formData", formData)

  const handleEdit = () => {
    router.push("/payment");
  };

  const handlePay = () => {
    dispatch(cleanFormData());
    router.push("/success");
  };

  return (
    <div className="flex items-center justify-center" style={{ height: "100%" }}>
      <div
        style={{
          width: 576,
          backgroundColor: "white",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #E7E9EF",
            padding: "20px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SectionTitle step={1} title="Payment information" isCompleted={true} />
            <Button onClick={() => handleEdit()} label="Edit" link={true} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 48px 36px",
          }}
        >
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
          <div style={{ marginTop: "48px" }}>
            <Button onClick={() => handlePay()} label="Pay $600.00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
