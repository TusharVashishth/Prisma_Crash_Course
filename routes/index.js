import { Router } from "express";
import UserRoutes from "./userRoutes.js";
import PostRoutes from "./postRoute.js";
import CommentRoutes from "./commentRoutes.js";

const router = Router();

router.use("/api/user", UserRoutes);

// * For Post Routes
router.use("/api/post", PostRoutes);

// * For Post Routes
router.use("/api/comment", CommentRoutes);

export default router;
