"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { saveFormData } from "../store/formSlice";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FormField from "../components/FormField";
import { PaymentFormData } from "../interfaces/types";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

const PaymentForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { formData } = useAppSelector((state) => state.form);

  const { register, handleSubmit, setValue, watch, formState: { errors, isValid } } = useForm<PaymentFormData>({
    defaultValues: formData,
    mode: 'onChange', 
  });

  useEffect(() => {
    if (formData) {
      Object.keys(formData).forEach((key) => {
        setValue(key as keyof PaymentFormData, formData[key as keyof PaymentFormData]);
      });
    }
  }, [formData, setValue]);

  const onSubmit: SubmitHandler<PaymentFormData> = (data) => {
    console.log("data", data)
    dispatch(saveFormData(data));
    router.push("/review");
  };

  const cardNumber = watch("cardNumber");
  const expiry = watch("expiry");
  const cvv = watch("cvv");
  const name = watch("name");
  const zip = watch("zip");

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
            <FormField
              label="Card number"
              type="tel"
              maxLength={16}
              register={register("cardNumber", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Card number must be 16 digits",
                },
              })}
              error={errors.cardNumber}
              isValid={!!cardNumber && !errors.cardNumber}
            />
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
              <FormField
                label="Expires (MM/YY)"
                width={232}
                maxLength={5}
                register={register("expiry", {
                  required: "This field is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: "Date must be in MM/YY format",
                  },
                })}
                error={errors.expiry}
                isValid={!!expiry && !errors.expiry}
              />
              <FormField
                label="Security code (CVV)"
                type="tel"
                width={232}
                maxLength={3}
                register={register("cvv", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "Security code must be 3 digits",
                  },
                })}
                error={errors.cvv}
                isValid={!!cvv && !errors.cvv}
              />
            </div>
            <FormField
              label="Name on card"
              register={register("name", {
                required: "This field is required",
              })}
              maxLength={20}
              error={errors.name}
              isValid={!!name && !errors.name}
            />
            <FormField
              label="ZIP code"
              type="tel"
              register={register("zip", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "ZIP code must be a number",
                },
              })}
              error={errors.zip}
              isValid={!!zip && !errors.zip}
            />
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
