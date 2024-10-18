import express from "express";
import protectRoute from "../middleware/ProtectRoute.js";
import {getCurrentUser, getUserforSideBar} from "../controllers/user.controller.js";
const router = express.Router();
router.get("/",protectRoute,getUserforSideBar)
router.get("/currentuser",protectRoute,getCurrentUser)
export default router;