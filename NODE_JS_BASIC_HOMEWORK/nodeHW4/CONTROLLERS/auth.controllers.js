import AuthService from "../SERVICES/auth.service.js";
import { BadRequest } from "../CONSTS/errors.const.js";

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      console.log("REGISTER", req.session);
      res.send(user);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async login(req, res) {
    try {
      const user = await AuthService.login(req.body);

      req.session.isLoggedIn = true;
      req.session.userId = user.id;
      console.log("LOGIN", req.session);

      res.send(user);
    } catch (error) {
      if (error instanceof BadRequest) {
        res.status(400).send({ message: error.message });
      } else {
        res.status(500).send({ message: error.message });
      }
    }
  }

  static async logout(req, res) {
    try {
      req.session.isLoggedIn = false;
      req.session.userId = null;
      console.log("LOGOUT", req.session);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}
