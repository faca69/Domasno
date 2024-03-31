import { BadRequest, NotFound } from "../const/errors.const.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export class UserService {
  static async register({ phone_or_gmail, name, username, password }) {
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      throw new BadRequest(
        `User with the username: ${username} already exists. Please be creative and try something else!`
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      phone_or_gmail,
      name,
      username,
      password: hashedPassword,
    });

    await user.save();

    return {
      phone_or_gmail: user.phone_or_gmail,
      name: user.name,
      username: user.username,
    };
  }
  //
  //
  //

  static async login({ username, password }) {
    const user = await User.findOne({ username: username });

    if (!user) {
      throw new BadRequest("Bad Credentials");
    }
    // console.log(user); // Log the entire user object
    console.log(password); // Log the password input

    const doPasswordsMatch = await bcrypt.compare(password, user.password);

    if (!doPasswordsMatch) {
      throw new BadRequest("Bad Credentials");
    }

    await user.save();

    return {
      name: user.name,
      username: user.username,
    };
  }
  //
  //
  //

  static getUser(id) {
    return User.findById(id).populate("posts");
  }

  //
  //
  //
  static async togglePost(userId, postId) {
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFound("User not found");
    }

    const postIndex = user.posts.findIndex(
      (post) => post.toString() === postId
    );

    if (postIndex === -1) {
      user.posts.push(postId);
    } else {
      user.posts.splice(postIndex, 1);
    }

    return user.save({ new: true });
  }
}
