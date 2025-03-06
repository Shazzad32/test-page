"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 590;
  const totalPrice = quantity * pricePerItem;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="w-full p-5 flex flex-col justify-center">
      <h1 className="lg:text-5xl text-3xl text-center mb-6">
        অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পুরন করুন।
      </h1>
      <div className="h-auto">
        {" "}
        <h2 className="text-2xl font-semibold mb-4">Your Products</h2>
        <div className="h p-4 rounded-md shadow-md border flex items-center gap-4 w-full lg:w-1/2">
          <img
            src="https://images.othoba.com/images/thumbs/0634295_wild-stone-ultra-sensual-long-lasting-perfume-for-men-100ml.webp"
            alt="Product Image"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              আতার হাদিয়া প্যাকেজ x <span>{quantity}</span>
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={decreaseQuantity}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
          <span className="text-lg font-semibold">{totalPrice}৳</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-2">
        <div className="lg:w-1/2 w-full">
          {" "}
          <h2 className="text-2xl font-semibold mt-6">Billing details</h2>
          <div className="bg-white p-4 rounded-md shadow mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium">আপনার নাম *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded mt-1"
                placeholder="আপনার নাম লিখুন"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">
                মোবাইল নাম্বার *
              </label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded mt-1"
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">
                আপনার ঠিকানা *
              </label>
              <textarea
                required
                className="w-full p-2 border rounded mt-1"
                placeholder="বসার নং, রোড নং, থানা, জেলা"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          {" "}
          <h2 className="text-2xl font-semibold mt-6">Your order</h2>
          <div className="border p-4 rounded-md bg-white mt-4">
            <div className="flex justify-center items-center gap-12">
              {" "}
              <img
                src="https://images.othoba.com/images/thumbs/0634295_wild-stone-ultra-sensual-long-lasting-perfume-for-men-100ml.webp"
                alt="Product Image"
                className="w-16 h-16 object-cover"
              />
              <span>আতার হাদিয়া প্যাকেজ × {quantity}</span>
              <span>{totalPrice}৳</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold ">
              <span>Sub Total</span>
              <span>{totalPrice}৳</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{totalPrice}৳</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-md font-semibold cursor-pointer">
            Place Order {totalPrice}৳
          </button>
        </div>
      </div>
    </div>
  );
}
