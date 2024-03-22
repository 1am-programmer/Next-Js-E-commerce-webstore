import React from "react";
import Image from "next/image";
import { GiBinoculars } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";

const Shopbody = () => {
  return (
    <div className="container">
      <div id="block" className="flex gap-4">
        <div id="navbar" className="max-w-[250px] ">
          <div id="CATEGORY" className="pb-10 pt-10">
            <p className="mb-3 text-2xl">Catergory</p>
            <div className="">
              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> T-shirts</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> Bags </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> Jackets </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> Shoes </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> Jumpers </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> Jeans </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> Sportwear </p>
              </div>
            </div>
          </div>
          <hr />
          <div id="SIZE" className="pt-10 pb-10">
            <p className="text-2xl mb-3">Size</p>
            <div className="">
              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> XS</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> S </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> M </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> L </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> XL </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> XXL </p>
              </div>
            </div>
          </div>
          {/* <hr />
                                    <div className="pt-10 pb-10" id="COLOR">
                                      <input type="checkbox" className="accent-black rounded-full" />{" "}
                                    </div> */}
          <hr />
          <div className="pt-10 pb-10" id="BRAND">
            <p className="mb-3 text-2xl">Brand</p>
            <div className="">
              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> Next</p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />{" "}
                <p> River Island </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> Geox </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" />
                <p> New Balance </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> UGG </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> F&F </p>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" className="accent-black" /> <p> Nike </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="pt-10 pb-10" id="PRICE">
            <p className="mb-3 text-2xl">Price</p>
            <p>
              Price Range: <span className="text-[#c96]">$0 - $1000</span>{" "}
            </p>
            <input type="range" className="accent-black" />
          </div>
        </div>
        <div id="flex">
          <div className="flex items-center text-gray-600 gap-6 mb-7">
            <Image
              src="/images/shopflex.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Women</p>
              <p className="hover:text-[#c96] text-xl text-black mb-3">
                Brown paperbag waist pencil skirt
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque
              </p>

              <div id="LITTLLE IMAGES" className="flex items-center gap-3 mt-5">
                <button>
                  <Image
                    src="/images/small-1.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-2.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-3.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$60.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar className="text-orange-500" />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="p-2">(2 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 hover:bg-[#c96] hover:text-white flex gap-2 items-center ">
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center text-gray-600 gap-6 mb-7 pt-4">
            <Image
              src="/images/shopflex-1.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Dresses</p>
              <p className="hover:text-[#c96] text-xl  text-black mb-3">
                Dark yellow lace cut out swing dress
              </p>
              <p>
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>

              <div id="LITTLLE IMAGES" className="flex items-center gap-3 mt-5">
                <button>
                  <Image
                    src="/images/small-4.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-5.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$84.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="p-2">(0 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 hover:bg-[#c96] hover:text-white flex gap-2 items-center ">
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center text-gray-600 gap-6 mb-7  pt-4">
            <Image
              src="/images/shopflex-2.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Jackets</p>
              <p className="hover:text-[#c96] text-xl  text-black mb-3">
                Khaki utility boiler jumpsuit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque
              </p>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$120.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar />
                <p className="p-2">(6 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button
                className="border  text-gray-600 cursor-not-allowed px-4 py-2 flex gap-2 items-center 
              disabled:border-[#c96] "
              >
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center text-gray-600 gap-6 pt-4 mb-7">
            <Image
              src="/images/shopflex-3.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Jeans</p>
              <p className="hover:text-[#c96] text-xl text-black mb-3">
                Blue utility pinafore denim dress
              </p>
              <p>
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi
              </p>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$76.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar className="text-orange-500" />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="p-2">(2 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 hover:bg-[#c96] hover:text-white flex gap-2 items-center ">
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center text-gray-600 gap-6 pt-4 mb-7">
            <Image
              src="/images/shopflex-4.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Shoes</p>
              <p className="hover:text-[#c96] text-xl text-black mb-3">
                Beige knitted elastic runner shoes
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque
              </p>

              <div id="LITTLLE IMAGES" className="flex items-center gap-3 mt-5">
                <button>
                  <Image
                    src="/images/small-6.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-7.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$84.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="p-2">(0 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 hover:bg-[#c96] hover:text-white flex gap-2 items-center ">
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center text-gray-600 gap-6 pt-4 mb-7">
            <Image
              src="/images/shopflex-5.jpg"
              width="700"
              height="700"
              className="w-[250px] h-[245px]"
            />
            <div id="TEXT" className="max-w-[500px]">
              <p className="mb-2">Bags</p>
              <p className="hover:text-[#c96] text-xl text-black mb-3">
                Orange saddle lock front chain cross body bag
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque
              </p>

              <div id="LITTLLE IMAGES" className="flex items-center gap-3 mt-5">
                <button>
                  <Image
                    src="/images/small-8.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-9.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>

                <button>
                  <Image
                    src="/images/small-10.jpg"
                    width="700"
                    height="700"
                    className="w-[40px] h-[40px]"
                  />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[#c96] text-xl">$52.00</p>
              <div className="flex items-center text-gray-500">
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar />
                <p className="p-2">(1 Reviews)</p>
              </div>
              <div className="flex items-center text-gray-500">
                <GiBinoculars className="text-xl" />
                <div className="grid grid-cols-2 divide-x">
                  <p className="p-2"> quick view</p>
                  <div className="flex items-center text-gray-500 px-1">
                    <TbArrowsCross />
                    <p className="p-2">Compare</p>
                  </div>
                </div>
              </div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 hover:bg-[#c96] hover:text-white flex gap-2 items-center ">
                <MdOutlineShoppingCartCheckout />
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopbody;
