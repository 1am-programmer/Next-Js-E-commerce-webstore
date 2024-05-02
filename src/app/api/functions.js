import jwt from "jsonwebtoken";

export function generateToken(user) {
  return jwt.sign(
    // what we are using to generate the token
    { id: user._id, admin: user.isAdmin },
    // the secret key
    process.env.JWT_SECRET,

    // options, when the token will expire
    {
      expiresIn: "1hr",
    }
  );
}
