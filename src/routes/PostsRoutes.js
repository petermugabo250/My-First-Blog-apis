import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  updatePost,createComment,allcomment,updateComment,DeletecommentbyId,
  
} from "../controller/postController";
import fileUpload from "../helper/multer";
import Authorization from "../middleware/Auntantication";
import commentAuth from "../middleware/commentAunt";
const PostRoutes = express.Router();
PostRoutes.post( "/create",Authorization,fileUpload.single("PostImage"),createPost);
PostRoutes.get("/read", getAllPosts);
PostRoutes.get("/read/:id",getPostById);
PostRoutes.delete("/delete/:id",Authorization, deletePostById);
PostRoutes.put("/update/:id",Authorization,fileUpload.single("PostImage"),updatePost);

// comment routes
PostRoutes.post("/comment/send/:id", commentAuth, createComment);
PostRoutes.get("/comment/get/:id", commentAuth, allcomment);
PostRoutes.put("/comment/update/:id", updateComment);
PostRoutes.delete("/comment/delete/:id", commentAuth, DeletecommentbyId);
export default PostRoutes;
