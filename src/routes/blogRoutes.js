import express from "express";
import {
     createBlog,
     allBlogs,
     blogById, 
     deleteBlogById,
     updateBlog,
     createComment,
    } from "../controller/blogcontroller";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";

const blogRoutes = express.Router();
blogRoutes.post("/create", Authorization, fileUpload.single("blogImage"),createBlog);
blogRoutes.get("/read", allBlogs);
blogRoutes.get("/read/:id",Authorization, blogById);
blogRoutes.delete("/delete/:id",deleteBlogById);
blogRoutes.put("/update/:id",Authorization,fileUpload.single("blogImage"), updateBlog);
blogRoutes.post("/comment/:id", createComment);


export default blogRoutes;