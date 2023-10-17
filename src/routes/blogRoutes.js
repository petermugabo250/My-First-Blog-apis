import express from "express";
import {
  createBlog,
  allBlogs,
  blogById,
  deleteBlogById,
  updateBlog,
  createComment,
  allcomment,
} from "../controller/blogcontroller";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";
import CommentAuth from "../middleware/commentauntantication";

const blogRoutes = express.Router();
blogRoutes.post(
  "/create",
  Authorization,
  fileUpload.single("blogImage"),
  createBlog
);
blogRoutes.get("/read", allBlogs);
blogRoutes.get("/read/:id", Authorization, blogById);
blogRoutes.delete("/delete/:id", deleteBlogById);
blogRoutes.put(
  "/update/:id",
  Authorization,
  fileUpload.single("blogImage"),
  updateBlog
);
blogRoutes.post("/comment/post/:id", CommentAuth, createComment);
blogRoutes.get("/comment/get/:id", CommentAuth, allcomment);
export default blogRoutes;
