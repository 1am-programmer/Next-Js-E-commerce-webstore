import mongoose from "mongoose";

// user schema - how the data of the user will look like

const User = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// the timestamps holds the createdAt and updatedAt date from each user created

export default mongoose.models.User || mongoose.model("User", User);
