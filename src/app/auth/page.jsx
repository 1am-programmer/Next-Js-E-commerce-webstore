import React from "react";
import { FaArrowRight, FaGoogle, FaFacebookF } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-hero flex justify-center text-gray-500">
      <div className="bg-white w-fit my-20 p-16 max-w-[650px]">
        <div id="SIGN IN " className="mb-10 flex-col items-center ">
          <h1 className="text-xl font-bold text-black">Sign In</h1>
          <div className="mt-5 mb-5 text-gray-500">
            <p className="pb-2 text-[17px]">Username or email address *</p>
            <input className="w-full p-2 bg-gray-200 outline-[#c96] border border-gray-300" />
          </div>
          <div className="text-gray-500">
            <p className="pb-2 text-[17px]">Password*</p>
            <input
              type="password"
              className="w-full p-2 bg-gray-200 outline-[#c96] border border-gray-300"
            />
          </div>
          <div className="flex items-center justify-between gap-5 pt-5 pb-5 text-gray-600">
            <div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 flex items-center gap-2">
                LOG IN <FaArrowRight className="text-[#c96]" />
              </button>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <p>Forgot Your Password?</p>
            </div>
          </div>

          <div>
            <hr className="w-full" />
            <p className="text-center pt-5 pb-10">Or sign in with</p>
            <div className="flex gap-2 items-center justify-center">
              <div>
                <button className="border px-3 py-2 flex gap-2 items-center">
                  <FaGoogle className="text-red-700" />
                  Login with Google
                </button>
              </div>
              <div>
                <button className="border px-3 py-2 flex gap-2 items-center ">
                  <FaFacebookF className="text-blue-500" />
                  Login With Facebook
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="SIGN IN " className="mb-10 flex-col items-center ">
          <h1 className="text-xl font-bold text-black">Register</h1>
          <div className="mt-5 mb-5 text-gray-500">
            <p className="pb-2 text-[17px]">Username or email address *</p>
            <input className="w-full p-2 bg-gray-200 outline-[#c96] border border-gray-300" />
          </div>
          <div className="text-gray-500">
            <p className="pb-2 text-[17px]">Password*</p>
            <input
              type="password"
              className="w-full p-2 bg-gray-200 outline-[#c96] border border-gray-300"
            />
          </div>
          <div className="flex items-center  gap-5 pt-5 pb-5 text-gray-600">
            <div>
              <button className="border border-[#c96] text-[#c96] px-4 py-2 flex items-center gap-2">
                SIGN UP <FaArrowRight className="text-[#c96]" />
              </button>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" />
              <p>
                I agree to the <span className="underline">privacy policy</span>
              </p>
            </div>
          </div>

          <div>
            <hr className="w-full" />
            <p className="text-center pt-5 pb-10">Or sign in with</p>
            <div className="flex gap-2 items-center justify-center">
              <div>
                <button className="border px-3 py-2 flex gap-2 items-center">
                  <FaGoogle className="text-red-700" />
                  Login with Google
                </button>
              </div>

              <div>
                <button className="border px-3 py-2 flex gap-2 items-center ">
                  <FaFacebookF className="text-blue-500" />
                  Login With Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
