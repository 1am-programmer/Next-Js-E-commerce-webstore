import bcrypt from "bcryptjs";

import User from "@/schemas/user";

import dbConnect from "@/lib/db";

export async function PUT(request) {
  const { email, newPassword } = await request.json();

  await dbConnect();

  try {
    const userExist = await User.findOne({ email });
    if (userExist) return Response.json({ msg: "Email already exist" });

    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(newPassword, salt);

    const user = await User.findOneAndUpdate(
      { email },
      { $set: { password: hashPassword } },
      { new: true }
    );

    return Response.json({ user });
  } catch (error) {
    return Response({ error });
  }
}
