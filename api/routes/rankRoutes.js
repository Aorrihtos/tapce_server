import { Router } from "express";
import { getRankOrdered, postScore } from "../controller/rankController.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.get("/rank", [auth], getRankOrdered);
router.post("/rank", [auth], postScore);

export default router;
