import express from "express";
import { 
    userSignUp,
    viewAllUsers,
    userUpdate,
 } from "../controller/StatusController";
 import fileUpload from "../helper/multer";
 const statusroute = express.Router();
 statusroute.post("/create", fileUpload.single("Profile"), userSignUp);
 statusroute.get("/read", viewAllUsers);
 statusroute.put("/update/:id", userUpdate);

 export default statusroute;
