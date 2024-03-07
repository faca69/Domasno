import { Router } from "express";
import trainersRoutes from "./routes/trainer.route.js";

const router = Router();

router.use("/trainers", trainersRoutes);

export default router;
