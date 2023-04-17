import { Router } from "express";
import { Login } from "../pages/login";

const router = Router()

router.get('/login',Login)

export default router;