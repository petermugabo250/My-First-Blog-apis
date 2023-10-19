import usertable from "../model/userModel";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, { genSalt, hash } from "bcrypt";
// Create user

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, profile } = req.body;
    //Validation functions
const validateEmail = (email) => {
// Basic email format validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};
    const validatePassword = (password) => {
      // Password requirements: at least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };

    if (!email || !validateEmail(email)) {
      return res.status(400).json({
        status: "400",
        message: "Invalid email",
      });
    }

    if(!password || !validatePassword(password))
    {
      return res.status(400).json({
        status: "400",
        message: "Password requirements: at least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character, Example: Test@123",
      });
    }
    const userEmail = await usertable.findOne({
      email: req.body.email,
    });

    if (userEmail) {
      return res.status(500).json({
        status: "500",
        message: "Email Already Exist",
      });
    }

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await usertable.create({
      firstname,
      lastname,
      email,
      password: hashedPass,
      profile: result?.secure_url || "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
    });

    return res.status(201).json({
      status: "201",
      message: "User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("Error: ", error)
    return res.status(500).json({
      status: "500",
      message: "Failed To Create User",
      error: error.message,
    });
  }
};

// login
export const login = async (req, res) => {
  try {
    const userLogin = await usertable.findOne({
      email: req.body.email,
    });
    if (!userLogin) {
      return res.status(404).json({
        status: "404",
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) {
      return res.status(404).json({
        status: "404",
        message: "Password Incorect",
      });
    }

    const token = await Jwt.sign(
      { id: userLogin._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRED_DATE }
    );
    return res.status(200).json({
      status: "200",
      message: "logedin Sucess",
      usertable: userLogin,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed To Login",
      error: error.message,
    });
  }
};

// update user
export const updateUser = async (req, res) =>{
    const { id } = req.params;
    try {
    const {firstname, lastname, email, password, profile, role} = req.body;
    const getId = await usertable.findById(id);
    if (!getId)
      return res.status(404).json({
        message: "Id not Found",
        error: error.message,
      });
 
      let result;
      if(req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
 const mine = await usertable.findByIdAndUpdate(id, {
       profile:  result?.secure_url || "https://res.cloudinary.com/dxitrjcef/image/upload/v1696870762/kazdcipwzwu0ycprzlg6.jpg",
       lastname,
       email, 
       password : hashedPass,
       firstname,
       role,
       
      })
 
 
      return res.status(200).json({
        status: "200",
       message: "Success",
       data: mine,

     });
   
  } catch (error) {
   return res.status(500).json({
     message: "Failded to Update",
     error: error.message
   })
  }
};

//delete user
export const deleteUserById = async (req, res) =>{
  try {
    const {id} = req.params;
    const findid = await usertable.findById(id);
    if(!findid)
    return res.status(404).json({
      message: " User Id Not Found",
});

const deleteTakenId= await usertable.findByIdAndDelete(id);
return res.status(201).json({
  statusbar: "201",
  message: "User Deleted Successfully",
  data: deleteTakenId,
});
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed To Delete Blog",
      message: "Entered Id Not Found",
      error: error.message,
    });
  }
}

//read all users
export const GetUsers = async(req, res) =>{
  try{
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Database query timeout"));
      }, 30000); // Set a 30-second timeout
    });

    const usersPromise = usertable.find();

    const users = await Promise.race([usersPromise, timeoutPromise]);

    if (users instanceof Array) {
      return res.status(200).json({
        status: "200",
        message: "All Users Are Below",
        data: users,
      });
    
  }
}
  catch (error){
    
    return res.status(500).json({
      statusbar: "500",
      message: "failed To Display Users",
      error: error.message,

    });
  }
}

// read user By Id
export const userByid = async(req,res)=>{
  try{
    const {id} = req.params;
  const userid = await usertable.findById(id);
  if(!userid)
  {
    return res.status(404).json({
      status:"404",
      message: "Blog Id Not Found",
    });
  }
  return res.status(200).json({
    statusbar: "User Id Found",
    message: "Congratrations",
    data: userid,
  })
}
catch (error) {
  return res.status(500).json({
    statusbar: "Failed",
    message: " Sorry Id Not Found",
    error: error.message,
  });
  
}
}

