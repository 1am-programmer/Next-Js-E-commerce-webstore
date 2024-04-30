import User from "@/schemas/user";

import dbConnect from "@/lib/db";

export async function DELETE(request) {
  const { email } = await request.json();

  await dbConnect();

  try {
    await User.findOneAndDelete({ email });

    return Response.json({ message: "User deleted" });
  } catch (error) {}
}
