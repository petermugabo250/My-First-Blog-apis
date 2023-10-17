import userModel from "../model/StatusModel";
import { uploadToCloud } from "../helper/cloud";

//Registering User

export const userSignUp = async (req, res) =>{
    try {
        const {FullName, Email, Password, Profile} = req.body;
        let userReg;
        if(req.file) userReg = await uploadToCloud(req.file, res);
        const userRegister = await userModel.create({
            fname,
            lname,
            email,
            Password,
            Profile: userReg?.secure_url,
        });
        return res.status(200).json({
            message: "User Registration Success",
            data: userRegister,
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "User registration failed",
            error: error.message,
        });
        
    }
};

// Read Registered User

export const viewAllUsers = async (req,res) =>{
    try {
      const getAllUsersInfo = await userModel.find();
      return res.status(200).json({
        message: "Data about all users are here:",
        data: getAllUsersInfo,
      })
    } catch (error) {
      return res.status(500).json({
        statusbar: "Sorry Something Went Wrong",
        message: "failed To Display Users Information",
        error: error.message,
  
      });
      
    }
  };

  // Updating Users' Information

  export const userUpdate = async (req, res) => {
    const { FullName, Email, Password} = req.body;
    try {
      const { id } = req.params;
      const getId = await userModel.findById(id);
      if (!getId)
        return res.status(404).json({
          message: "User Id not Found",
        });
      const make = await userModel.findByIdAndUpdate(id, {
        FullName,
        Email,
        Password,
      });
  
      return res.status(200).json({
        message: "Users' Info  Updated Successifully",
       
      });
    } catch (error) {
      return res.status(500).json({
        statusbar: "Failed",
        message: "Can not Update Infomation",
        error: error.message,
      });
    }
  };
  