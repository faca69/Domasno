import express from "express";
import path from "path";
import router from "./router.const.js";
import cors from "cors";

const staticPath = path.join(import.meta.dirname, "public");

const PORT = 3000;
const HOSTNAME = "localhost";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/home", express.static(staticPath));

app.use("/api", router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
