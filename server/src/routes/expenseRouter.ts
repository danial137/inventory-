import { Router } from "express";
import { getExpensByCategory } from "../controllers/expenseController";

const router = Router()

router.get("/", getExpensByCategory)


export default router