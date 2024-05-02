import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "@/schemas/user";

import dbConnect from "@/lib/db";
import { generateToken } from "../../functions";

export async function POST(request) {
  // get what is sent from the client
  const { email, pass } = await request.json();

  //To connect to the database
  await dbConnect();

  try {
    // check the user collection to see if a user already have the email address
    const user = await User.findOne({ email });

    // check if email and password tallies with what is in the db
    const passwordCorrect = user && bcrypt.compareSync(pass, user.password);

    if (user && passwordCorrect) {
      //Don't display the password while returning the user info
      const { password, ...others } = user._doc;

      // generate a token
      const token = generateToken({ _id: user._id, isAdmin: user.isAdmin });

      // return the created user as a response back to the client

      const res = NextResponse.json(others, { status: 200 });

      res.cookies.set("token", token, { httpOnly: true });

      return res;
    }
    // return if password or email does not match

    return Response.json({ msg: "Invalid email or password" });
  } catch (error) {
    return Response.json(error);
  }
}

//Status Codes: 200 OK, 201: succesfully created, 300 - redirecting, 400: bad request, 401: unauthorized, 404: not found, 500: server error
