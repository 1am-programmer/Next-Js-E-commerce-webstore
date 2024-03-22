import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Checkout = () => {
  return (
    <div>
      <div className="container">
        <button className="border border-dotted p-2">
          Have a coupon?
          <span className="text-[#c96]"> Click here to enter your cod..</span>
        </button>
        <div className="flex justify-center">
          <div id="Table" className="flex items-center gap-2 flex-1">
            <div className="w-full container ">
              <p className="font-bold">Billing Details</p>
              <div>
                <div className="flex items-center gap-4 w-full down">
                  <div className="flex-1">
                    <p>First Name*</p>
                    <input
                      type="text"
                      placeholder="first name"
                      className="border w-full p-4"
                    />
                  </div>
                  <div className="flex-1">
                    <p>Last Name*</p>
                    <input
                      type="text"
                      placeholder="last name"
                      className="border w-full p-4"
                    />
                  </div>
                </div>
                <div className="down">
                  <p>Company Name (Optional)</p>
                  <input
                    type="text"
                    placeholder="company name"
                    className="p-4 border w-full"
                  />
                </div>
                <div className="down">
                  <p>Country *</p>
                  <input
                    type="text"
                    placeholder="country  "
                    className="p-4 border w-full"
                  />
                </div>
                <div className="down">
                  <p>Street address *</p>
                  <input
                    type="text"
                    placeholder="House number and Street name  "
                    className="p-4 border w-full down"
                  />
                  <input
                    type="text"
                    placeholder="Apartment,suite,unit,etc..  "
                    className="p-4 border w-full"
                  />
                </div>

                <div className="flex items-center gap-4 w-full down">
                  <div className="flex-1">
                    <p>Town / City *</p>
                    <input
                      type="text"
                      placeholder="town / city "
                      className="border w-full p-4"
                    />
                  </div>
                  <div className="flex-1">
                    <p>State / County *</p>
                    <input
                      type="text"
                      placeholder="state / county "
                      className="border w-full p-4"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full down">
                  <div className="flex-1">
                    <p>Postcode / ZIP * </p>
                    <input
                      type="text"
                      placeholder="postcode / ZIP  "
                      className="border w-full p-4"
                    />
                  </div>
                  <div className="flex-1">
                    <p>Phone *</p>
                    <input
                      type="text"
                      placeholder="Tel.. "
                      className="border w-full p-4"
                    />
                  </div>
                </div>

                <div className="down">
                  <p>Email address *</p>
                  <input
                    type="email"
                    placeholder="country  "
                    className="p-4 border w-full"
                  />
                </div>

                <div className="flex items-center gap-2 down">
                  <input type="checkbox" className="accent-black" />
                  <p>Create an account?</p>
                </div>

                <div className="flex items-center gap-2 down">
                  <input type="checkbox" className="accent-black" />
                  <p>Ship to a different address?</p>
                </div>

                <div>
                  <p>Order notes (optional)</p>
                  <textarea
                    placeholder="Notes about your order,e.g. special notes for delivery"
                    className="w-full pb-[6rem] border  border-[#c96]"
                  ></textarea>
                </div>
              </div>
              <button className="">Done</button>
            </div>
          </div>

          <div>
            <div
              id="NAVBAR"
              className="bg-gray-100 flex-1 max-w-[400px] p-5 container font-light"
            >
              <div>
                <h1 className="pb-5 pt-5 font-bold">Your Order</h1>
                <hr />
                <div className="pb-5 pt-5 font-bold flex justify-between">
                  <p className="">Product:</p>
                  <p> Total</p>
                </div>

                <hr />
                <div className="pb-5 pt-5 flex justify-between">
                  <p className="">Beige knitted elastic runner shoes</p>
                  <p> $84.00</p>
                </div>
                <hr />
                <div className="pb-5 pt-5 flex justify-between">
                  <p className="">Blue utility pinafore denimdress</p>
                  <p> $76.00</p>
                </div>
                <hr />
                <div className="pb-5 pt-5 font-bold flex justify-between">
                  <p className="">Subtotal:</p>
                  <p> $160.00</p>
                </div>
                <hr />
                <div className="pb-5 pt-5 flex justify-between">
                  <p className="">Shipping:</p>
                  <p> Free Shipping</p>
                </div>
                <hr />
                <div className="pb-5 pt-5 flex justify-between text-[#c96] font-bold">
                  <p className="">Total:</p>
                  <p> $160.00</p>
                </div>
                <hr />

                <div className="text-gray-400">
                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="p-2 " />
                      <p className="ml-2 text-black">Direct Bank transfer</p>
                    </div>
                    <p className="container">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>

                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="" />
                      <p className="ml-2 text-black">Check payment</p>
                    </div>

                    <p className="container">
                      Ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                      odio. Quisque volutpat mattis eros. Nullam malesuada erat
                      ut turpis.
                    </p>
                  </div>

                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="" />
                      <p className="ml-2 text-black">Cash on Delivery</p>
                    </div>

                    <p className="container">
                      Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit. Donec odio. Quisque volutpat
                      mattis eros.
                    </p>
                  </div>

                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="" />
                      <p className="ml-2 text-black">Paypal</p>
                    </div>

                    <p className="container">
                      Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                      viverra non, semper suscipit, posuere a, pede. Donec nec
                      justo eget felis facilisis fermentum.
                    </p>
                  </div>

                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" className=" " />
                      <p className="ml-2 text-black">Credit Card(Stripe)</p>
                    </div>

                    <p className="container">
                      Donec nec justo eget felis facilisis fermentum.Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit. Donec odio.
                      Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
                    </p>
                  </div>
                </div>

                <div>
                  <button className=" border border-[#c96] text-[#c96] px-4 py-2 w-full">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
