"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormField from "./components/FormField ";
import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const onSubmit = (data) => {
    setIsSubmitted(true);
    router.push("/review");
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "100%" }}
    >
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
            padding: "36px 48px 32px 48px",
          }}
        >
          <SectionTitle step={1} title="Payment information" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <FormField label="Card number" register={register("cardNumber")} />
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
              <FormField
                label="Expires (MM/YY)"
                width={232}
                register={register("expiry")}
              />
              <FormField
                label="Security code (CVV)"
                width={232}
                register={register("cvv")}
              />
            </div>
            <FormField label="Name on card" register={register("name")} />
            <FormField label="ZIP code" register={register("zip")} />
            <div style={{ marginTop: "8px" }}>
              <Button label="Continue" />
            </div>
          </form>
        </div>
        <div style={{ padding: "20px 32px" }}>
          <SectionTitle step={2} title="Review and pay" isInactive={true} />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
