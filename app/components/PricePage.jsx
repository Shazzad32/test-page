import React from "react";

const PricePage = () => {
  return (
    <div className="h-auto w-full rounded flex flex-col items-center justify-center gap-7 p-4 border border-e-red-300 shadow">
      <h1 className="text-2xl lg:text-3xl font-bold">
        রেগুলার প্রাইস = ৯৯০ টাকা
      </h1>
      <h1 className="lg:text-5xl text-3xl text-red-500 font-extrabold">
        ডিসকাউন্ট প্রাইস মাত্র ৫৯০ টাকা
      </h1>
      <div className="h-auto rounded-md w-full bg-green-300 flex items-center justify-center text-2xl lg:text-4xl p-4">
        <h1>১ টাকাও অগ্রিম পেমেন্ট ছাড়া অর্ডার করুন</h1>
      </div>
      <div className="h-auto p-5  w-2/3  flex items-center justify-center text-2xl lg:text-3xl rounded-2xl shadow py-5 text-wrap text-center border border-amber-200">
        <h1>
          আমাদের মেসেঞ্জারে 24 ঘন্টা প্রতিনিধি একটিভ থাকে কোন সমস্যা হলে সাথে
          সাথে মেসেঞ্জারে মেসেজ করবেন।
        </h1>
      </div>
      <div className="h-[150px] w-full bg-white flex justify-center items-center gap-5">
        {/* <button className="uppercase bg-blue-400 text-2xl text-white font-bold px-13 h-1/2 rounded-md">
          FSCEBOOK
        </button> */}
        <a
          className="uppercase bg-blue-400 text-2xl text-white font-bold px-13 h-1/2 rounded-md flex items-center"
          href="https://www.facebook.com/"
          target="blank"
        >
          {" "}
          FSCEBOOK
        </a>

        <a
          className="uppercase bg-green-600 text-2xl text-white font-bold px-13 h-1/2 rounded-md flex items-center"
          href="https://web.whatsapp.com/"
          target="blank"
        >
          whatsapp
        </a>
      </div>
      <div className="h-auto p-5  w-2/3  flex items-center justify-center text-3xl rounded-2xl shadow py-5 text-wrap text-center border border-amber-200">
        <h1>কল করে অর্ডার করতে চাই</h1>
      </div>
      <div className="h-[150px] w-full bg-white flex justify-center items-center gap-5">
        <button className="uppercase bg-red-400  text-2xl text-white font-bold px-13 h-1/2 rounded-md">
          01239405-4943
        </button>
      </div>
    </div>
  );
};

export default PricePage;
