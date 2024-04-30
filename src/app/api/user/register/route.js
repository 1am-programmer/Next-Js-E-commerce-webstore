import bcrypt from "bcryptjs";

import User from "@/schemas/user";

import dbConnect from "@/lib/db";

//  a function with the rest method (POST || GET || DELETE || PUT)
export async function POST(request) {
  // get what is sent from the client
  const { email, password } = await request.json();

  //To connect to the database
  await dbConnect();

  try {
    // check the user collection to see if a user already have the email address
    const userExist = await User.findOne({ email });

    if (userExist) return Response.json({ msg: "Email already exist" });

    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(password, salt);

    // create an instance of the user model
    const user = new User({
      email, //the email gotten from the body/client
      password: hashPassword, // the hashed password,
    });

    //To save this user template to the Dan folder in the database
    await user.save();

    // return the created user as a response back to the client
    return Response.json({ message: user });
  } catch (error) {
    return Response.json(error);
  }

  // return the response from the api
}
