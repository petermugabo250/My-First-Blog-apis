import express from "express";
import {
  createBlog,
  allBlogs,
  blogById,
  deleteBlogById,
  updateBlog,createComment,allcomment,
  
} from "../controller/blogcontroller";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";
import CommentAuth from "../middleware/commentauntantication";
const blogRoutes = express.Router();
blogRoutes.post(
  "/create",
  Authorization,
  fileUpload.single("PostImage"),
  createBlog
);
blogRoutes.get("/read", allBlogs);
blogRoutes.get("/read/:id",blogById);
blogRoutes.delete("/delete/:id",Authorization, deleteBlogById);
blogRoutes.put(
  "/update/:id",Authorization,fileUpload.single("PostImage"),
  updateBlog
);
blogRoutes.post("/comment/post/:id", CommentAuth, createComment);
blogRoutes.get("/comment/get/:id", CommentAuth, allcomment);
export default blogRoutes;
