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

    // check if email and password tallies with what is in the db
    const passwordCorrect = user && bcrypt.compareSync(pass, user.password);

    if (user && passwordCorrect) {
      //Don't display the password while returning the user info
      const { password, ...others } = user._doc;

      // return the created user as a response back to the client
      return Response.json({ message: others });
    }
    // return if password or email does not match
    return Response.json({ msg: "Invalid email or password" });
  } catch (error) {
    return Response.json(error);
  }
}
