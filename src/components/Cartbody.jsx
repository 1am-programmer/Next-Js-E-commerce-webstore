import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LuRefreshCw } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const items = [
  {
    id: 1,
    image: "/images/small-6.jpg",
    text: "Beige knitted elastic runner shoes",
    price: "$84.00",
    itemAmount: "5",
    Total: "$84.00",
  },
  {
    id: 2,
    image: "/images/small-4.jpg",
    text: "Blue utility pinafore denim dress",
    price: "$76.00",
    itemAmount: "5",
    Total: "$76.00",
  },
];

const Cartbody = () => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <div id="Table" className="flex gap-2 flex-1">
          <div className="w-full mr-2">
            <div className="w-full mr-2 mt-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=""> Product</TableHead>
                    <TableHead className=""> Description</TableHead>

                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, i) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <Image
                          src={item.image}
                          width="700"
                          height="700"
                          alt="Image"
                          className="w-[50px] h-[50px]"
                        />
                      </TableCell>
                      <TableCell>{item.text}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.itemAmount}</TableCell>
                      <TableCell className="text-[#c96]">
                        {item.Total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between">
                <div className="">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="p-3 border"
                  />
                  <button className="border border-[#c96] p-3">
                    <FaArrowRight className="text-[#c96]" />
                  </button>
                </div>

                <div>
                  <button className="flex gap-2 border items-center p-2">
                    Update Cart <LuRefreshCw />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            id="NAVBAR"
            className="bg-gray-100 flex-1 max-w-[400px] p-5 container"
          >
            <div>
              <h1 className="pb-5 pt-5 text-xl">Cart Total</h1>
              <hr />
              <div className="pb-5 pt-5 text-xl flex justify-between">
                <p className="">Subtotal:</p>
                <p> $160.00</p>
              </div>
              <hr />
              <h2 className="pb-5 pt-5 text-xl">Shipping</h2>
              <div>
                <div className="flex justify-between">
                  <div className="flex justify-between mb-2">
                    <input type="radio" className="p-2" />
                    <p className="ml-2">Free shipping</p>
                  </div>

                  <div>$0.00</div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex justify-between">
                    <input type="radio" className="gap-2" />
                    <p className="ml-2">Standard</p>
                  </div>

                  <div>$10.00</div>
                </div>

                <div className="flex justify-between mb-2">
                  <div className="flex justify-between">
                    <input type="radio" className="gap-2" />
                    <p className="ml-2">Express</p>
                  </div>

                  <div>$20.00</div>
                </div>
              </div>

              <p className="text-xl pb-2 pt-5"> Estimate for Your Country</p>
              <p className="underline  pb-5">Change address</p>
              <hr />
              <div>
                <div className="text-[#c96] text-xl flex justify-between mb-5">
                  <p>Total:</p>
                  <p>$160.00</p>
                </div>
                <button className=" border border-[#c96] text-[#c96] px-4 py-2 w-full">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
          <button className="flex gap-2 border border-black items-center w-full p-2 item-center justify-center text-center hover:text-[#c96] mt-10">
            CONTINUE SHOPPING <LuRefreshCw />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartbody;
