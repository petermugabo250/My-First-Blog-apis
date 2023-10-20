import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  updatePost,createComment,allcomment,
  
} from "../controller/postController";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";
import commentAuth from "../middleware/commentAuntantication";
const PostRoutes = express.Router();
PostRoutes.post(
  "/create",
  Authorization,
  fileUpload.single("PostImage"),
  createPost
);
PostRoutes.get("/read", getAllPosts);
PostRoutes.get("/read/:id",getPostById);
PostRoutes.delete("/delete/:id",Authorization, deletePostById);
PostRoutes.put(
  "/update/:id",Authorization,fileUpload.single("PostImage"),
  updatePost
);
PostRoutes.post("/comment/post/:id", commentAuth, createComment);
PostRoutes.get("/comment/get/:id", commentAuth, allcomment);
export default PostRoutes;
