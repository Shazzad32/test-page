import React from "react";
import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  return (
    <div className="h-auto w-full bg-gray-200 flex justify-center items-center flex-col gap-5">
      <OrderForm />
    </div>
  );
};

export default OrderPage;
