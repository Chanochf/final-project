import { Router } from "express";
import { deadliestTypesController } from "../controllers/analysisController";
const router = Router();
router.get("/deadliest-attack-types",deadliestTypesController)
router.get("/incident-trends")
export default router