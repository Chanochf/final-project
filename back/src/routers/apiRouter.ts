import { Router } from "express";
import analysisRouter from "./analysisRouter"
const router = Router();
router.use("/analysis",analysisRouter)


export default router;