import { BadRequest, NotFound } from "../CONSTS/errors.const.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import UserModel from "../MODELS/user.model.js";

export default class AuthService {
  static async register({ username, name, password }) {
    const existingUser = await UserModel.getUserByUsername(username);

    if (existingUser) {
      throw new BadRequest(
        `User with the username: ${username} already exists. Please be creative and try something else!`
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: uuidv4(),
      name,
      username,
      password: hashedPassword,
      usernameCreatedAt: new Date().toISOString(),
    };

    const { password: TRASH, ...restOfUser } = await UserModel.create(user);

    return restOfUser;
  }

  static async login({ username, password }) {
    const user = await UserModel.getUserByUsername(username);

    if (!user) {
      throw new BadRequest("Bad Credentials");
    }

    const doPasswordsMatch = await bcrypt.compare(password, user.password);

    if (!doPasswordsMatch) {
      throw new BadRequest("Bad Credentials");
    }

    const { password: TRASH, ...restOfUser } = user;

    return restOfUser;
  }
}
