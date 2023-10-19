import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  updatePost,createComment,allcomment,
  
} from "../controller/blogcontroller";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";
import commentAuth from "../middleware/commentAuntantication";
const blogRoutes = express.Router();
blogRoutes.post(
  "/create",
  Authorization,
  fileUpload.single("PostImage"),
  createPost
);
blogRoutes.get("/read", getAllPosts);
blogRoutes.get("/read/:id",getPostById);
blogRoutes.delete("/delete/:id",Authorization, deletePostById);
blogRoutes.put(
  "/update/:id",Authorization,fileUpload.single("PostImage"),
  updatePost
);
blogRoutes.post("/comment/post/:id", commentAuth, createComment);
blogRoutes.get("/comment/get/:id", commentAuth, allcomment);
export default blogRoutes;
