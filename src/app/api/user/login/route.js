import bcrypt from "bcryptjs";

import User from "@/schemas/user";

import dbConnect from "@/lib/db";

export async function POST(request) {
  // get what is sent from the client
  const { email, pass } = await request.json();

  //To connect to the database
  await dbConnect();

  try {
    // check the user collection to see if a user already have the email address
    const user = await User.findOne({ email });

    // check if password tallies with what is in the db

    const passwordCorrect = bcrypt.compareSync(pass, user.password);

    // return if password does not match
    if (!passwordCorrect) return Response.json({ msg: "Incorrect details" });

    // return the created user as a response back to the client

    const { password, ...others } = user._doc;

    return Response.json({ message: others });
  } catch (error) {
    return Response.json(error);
  }
}
