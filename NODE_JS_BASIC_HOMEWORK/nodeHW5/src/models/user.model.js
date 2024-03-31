import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    phone_or_gmail: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
