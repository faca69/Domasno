import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import globalRouter from "./SRC/const/globalRouter.const.js";
import { connect } from "mongoose";
import { MONGO_URI } from "./SRC/const/db.const.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", globalRouter);

console.log(MONGO_URI);

connect(MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, process.env.HOST, async () => {
      console.log(
        `The server is up at port: ${process.env.PORT} and on host: ${process.env.HOST}`
      );
    });
  })
  .catch((error) => {
    console.log("Issue while connecting to Mongo DB.", { error });
  });
