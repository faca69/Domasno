import { BadRequest } from "../const/errors.const.js";
import { UserService } from "../services/user.service.js";
import { userSchema } from "../schemas/user.schema.js";

export default class UserController {
  static async register(req, res) {
    try {
      console.log(req.body);

      const userData = req.body;

      await userSchema.validateAsync(userData);

      const newUser = await UserService.register(userData);

      res.json(newUser);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //
  //
  //
  static async login(req, res) {
    try {
      const userData = req.body;

      const user = await UserService.login(userData);
      res.json(user);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
  //
  //
  //

  static async logout(req, res) {
    try {
      res.jsonStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //
  //
  //

  static async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  //
  //
  //

  static async togglePost(req, res) {
    try {
      const userId = req.params.userId;
      const postId = req.params.postId;

      const updatedUser = await UserService.togglePost(userId, postId);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}
