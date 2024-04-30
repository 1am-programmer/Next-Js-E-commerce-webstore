import React from "react";
import { FaArrowRight, FaGoogle, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="bg-hero flex justify-center ">
      <Tabs defaultValue="account" className="w-[650px]  text-gray-500 my-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Sign In</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                {/* Make changes to your account here. Click save when you're done. */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label
                  htmlFor="name"
                  className="text-gray-500 text-[17px] pb-4 font-normal"
                >
                  Username or email address*
                </Label>
                <Input
                  id="name"
                  className="bg-gray-200 outline-[#c96] border border-gray-300"
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="username"
                  className="text-gray-500 text-[17px] pb-4 font-normal"
                >
                  Password
                </Label>
                <Input
                  id="username"
                  className="bg-gray-200 outline-[#c96] border border-gray-300"
                />
              </div>

              <div>
                <Button className="bg-white rounded-none hover:bg-[#c96] hover:text-white font-normal border border-[#c96] text-[#c96] px-4 py-2 flex items-center gap-2">
                  LOG IN <FaArrowRight />
                </Button>

                <div>
                  <div className="flex items-center gap-2 ">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>
                  <p className="text-[12px] text-[#c96] flex justify-center">
                    Forgotten password?
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className=" flex justify-between"></CardFooter>
            <hr className="px-5" />
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
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label
                  htmlFor="name"
                  className="text-gray-500 text-[17px] pb-4 font-normal"
                >
                  Username or email address*
                </Label>
                <Input
                  id="name"
                  className="bg-gray-200 outline-[#c96] border border-gray-300"
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="username"
                  className="text-gray-500 text-[17px] pb-4 font-normal"
                >
                  Password
                </Label>
                <Input
                  id="username"
                  className="bg-gray-200 outline-[#c96] border border-gray-300"
                />
              </div>
            </CardContent>
            <CardFooter className=" flex justify-between">
              <Button className="bg-white rounded-none hover:bg-[#c96] hover:text-white font-normal border border-[#c96] text-[#c96] px-4 py-2 flex items-center gap-2">
                LOG IN <FaArrowRight />
              </Button>

              <div>
                <div className="flex items-center gap-2 ">
                  <input type="checkbox" />
                  <p>Remember Me</p>
                </div>
                <p className="text-[12px] text-[#c96] flex justify-center">
                  Forgotten password?
                </p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
