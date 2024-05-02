import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";

export async function POST(request) {
  let cookies = request.cookies.get("token");

  //Verifies if the user is an admin or not
  let user = jwt.verify(cookies.value, process.env.JWT_SECRET);

  //If the user is not an admin, return a 401 error, else returns the token
  if (!user.admin) return NextResponse.json("not admin", { status: 401 });
  return NextResponse.json({ msg: cookies });
}
