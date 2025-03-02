import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { generateToken } from "../config/jwt.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://www.gravatar.com/avatar/anything",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
     refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAccessToken = function () {
  const payload = {
    _id: this._id,
    name: this.name,
    email: this.email,
    avatar: this.avatar,
  };
  return generateToken(payload);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
