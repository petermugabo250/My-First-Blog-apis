import express from "express";
import { 
    userSignUp,
    viewAllUsers,
    userUpdate,
 } from "../controller/userControllers";
 import fileUpload from "../helper/multer";
 const userRoute = express.Router();
 userRoute.post("/create", fileUpload.single("Profile"), userSignUp);
userRoute.get("/read", viewAllUsers);
userRoute.put("/update/:id", userUpdate);

 export default userRoute;
