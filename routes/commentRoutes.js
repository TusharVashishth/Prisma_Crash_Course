import { Router } from "express";
import {
  createComment,
  fetchComments,
  showComment,
  deleteComment,
} from "../Controller/CommentController.js";

const router = Router();

router.get("/", fetchComments);
router.get("/:id", showComment);
router.post("/", createComment);
// router.put("/:id", updateUser);
router.delete("/:id", deleteComment);

export default router;
