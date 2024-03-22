import React from "react";

const Description = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <nav className="w-full flex justify-center gap-6 text-xl">
          <a href="#">Description</a>
          <a href="#">Additional Information</a>
          <a href="#">Shipping & Returns</a>
          <a href="#">Reviews(2)</a>
        </nav>
        <div className="p-5 border text-gray-400 leading-7">
          <p className="text-xl text-black pb-4">Product Information</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
            ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
            ligula vulputate sem tristique cursus.
          </p>
          <div className="px-4 pb-4">
            <ul className="list-disc ">
              <li>
                Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                elit.
              </li>
              <li> Vivamus finibus vel mauris ut vehicula.</li>
              <li>
                Nullam a magna porttitor, dictum risus nec, faucibus sapien
              </li>
            </ul>
          </div>
          . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
          nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices
          nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus.
        </div>
      </div>
    </div>
  );
};

export default Description;
