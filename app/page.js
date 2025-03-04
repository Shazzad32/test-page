import Youtube from "./components/Youtube";
import Description from "./components/Description";
import PricePage from "./components/PricePage";
import Contact from "./components/Contact";
import OrderPage from "./order/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl text-center">
        বিশেষ উপহারের জন্য আকর্ষণীয় গিফট বক্স প্রিয়জনকে দিন পবিত্রতার স্পর্শ।
      </h1>
      <Youtube />
      <a
        href={"/order"}
        className="uppercase bg-red-400  text-2xl text-white font-bold py-6 p-15 rounded-md"
      >
        অর্ডার করতে চাই{" "}
      </a>
      <Description />
      <PricePage />
      {/* <Contact /> */}
      <OrderPage />
    </div>
  );
}
