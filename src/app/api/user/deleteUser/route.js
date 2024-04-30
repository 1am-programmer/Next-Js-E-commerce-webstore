import User from "@/schemas/user";

import dbConnect from "@/lib/db";

export async function DELETE(request) {
  const { email } = await request.json();

  await dbConnect();

  try {
    const userExist = await User.findOne({ email });
    if (userExist) return Response.json({ msg: "Email already exist" });

    await User.findOneAndDelete({ email });

    return Response.json({ message: "User deleted" });
  } catch (error) {}
}
