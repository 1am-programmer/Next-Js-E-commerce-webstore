import React from "react";
import Image from "next/image";

const From = () => {
  return (
    <div>
      <div className="container mx-auto pt-20  pb-20 ">
        <div className="text-center text-gray-600">
          <h1 className="font-bold text-4xl text-black mb-4">From Our Blog</h1>
          <p className="text-gray-600 mb-3">
            Donec odio. Quisque volutpat mattis eros.
          </p>
          <p className="text-grey-600 mb-4">Nullam malesuada erat</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <Image
                src={"/images/product-11.jpg"}
                width="700"
                height="700"
                className="w-[290px] h-[250px] mb-4"
              />
              <div>
                <p className="">Nov 18 2018, 1 comments</p>
                <p className="text-black font-bold">
                  Lorem ipsum dolor sit amet
                </p>
                <p className=" mb-3">
                  expedita ipsum voluptas assumenda aspernatur molestias.
                </p>
                <p className="text-[#c96]">Read More </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={"/images/product-12.jpg"}
                width="700"
                height="700"
                className="w-[290px] h-[250px] mb-4"
              />
              <div>
                <p className="">Dec 22 2018, 1 comments</p>
                <p className="text-black font-bold">
                  Lorem ipsum dolor sit amet
                </p>
                <p className=" mb-3">
                  expedita ipsum voluptas assumenda aspernatur molestias.
                </p>
                <p className="text-[#c96]">Read More </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={"/images/product-13.jpg"}
                width="700"
                height="700"
                className="w-[290px] h-[250px] mb-4"
              />
              <div>
                <p className="">Feb 18 2019, 1 comments</p>
                <p className="text-black font-bold">
                  Lorem ipsum dolor sit amet
                </p>
                <p className=" mb-3">
                  expedita ipsum voluptas assumenda aspernatur molestias.
                </p>
                <p className="text-[#c96]">Read More </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={"/images/product-14.jpg"}
                width="700"
                height="700"
                className="w-[290px] h-[250px] mb-4"
              />
              <div>
                <p className="">Jun 30 2019, 1 comments</p>
                <p className="text-black font-bold">
                  Lorem ipsum dolor sit amet
                </p>
                <p className=" mb-3">
                  expedita ipsum voluptas assumenda aspernatur molestias.
                </p>
                <p className="text-[#c96]">Read More </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[100%]" />
    </div>
  );
};

export default From;
