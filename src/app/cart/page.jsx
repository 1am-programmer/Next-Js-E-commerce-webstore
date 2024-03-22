import Cartbody from "../../components/Cartbody";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-Shophero h-[200px] w-full flex flex-col items-center justify-center mt-10 mb-10">
        <p className="text-5xl">Shopping Cart</p>
        <p className="text-2xl text-[#c96]">Shop</p>
      </div>

      <Cartbody />

      <hr className="mt-2" />
    </div>
  );
};

export default page;
