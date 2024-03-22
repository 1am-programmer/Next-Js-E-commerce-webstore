"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Slackside_One } from "next/font/google";
import Image from "next/image";
import { LiaSearchSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { usePathname } from "next/navigation";

// const roboto = Slackside_One({
//   weight: "400",
//   subsets: ["latin"],
// });

const Header = () => {
  const [position, setPosition] = useState(0);

  const path = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPosition(window.scrollY);
    });
  });

  return (
    <div
      className={`mx-auto px-5  text-white ${
        position > 300 ? "sticky" : "relative"
      }  top-0 z-[100] ${
        position > 300 && path == "/" ? "bg-black" : "bg-transparent"
      } ${path != "/" && "bg-white shadow-lg"} `}
    >
      <div className="flex items-center justify-between py-5 ">
        <div>
          <Image
            src={"/images/logo.png"}
            // src="/images/logo.png"
            width="700"
            height="700"
            className={`h-[30px] w-[110px] ${path !== "/" && "invert "} `}
          />
        </div>
        <div className="gap-4 flex items-center">
          <Link href="/" className="text-[#c96]">
            HOME
          </Link>
          <Link href="/shoplist" className="text-[#c96]">
            SHOP
          </Link>
          <Link href="/product" className="text-[#c96]">
            PRODUCT
          </Link>
          <Link href="/checkout" className="text-[#c96]">
            CHECKOUT
          </Link>
          <Link href="/cart" className="text-[#c96]">
            CART
          </Link>
        </div>

        <div className="flex items-center ">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search product.. "
            className="p-2 border-b bg-transparent"
          />
          <LiaSearchSolid className="text-2xl hover:text-[#c96] -translate-x-10" />
          <div className="flex items-center gap-3" id="heart and cart">
            <FaRegHeart className="text-2xl hover:text-[#c96]" />
            <div className="flex item-center gap-1">
              <FiShoppingCart className="text-2xl hover:text-[#c96]" />
              <p className="bg-[#c96] rounded-full w-fit h-fit px-2 py-1 text-[10px]">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
