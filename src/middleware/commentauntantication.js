import Jwt  from "jsonwebtoken";
import usertable from "../model/userModel";

const CommentAuth = async(req,res,next) =>{
  let token;
    try{
if(
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
)
{
    token = req.headers.authorization.split(" ")[1];
}
if(!token)
{
   
    return res.status(404).json({
      status: "404",
      message:" Your are not Logged In Please Login",
    });  
}
const decoded = await Jwt.verify(token,process.env.JWT_SECRET);
const User = await usertable.findById(decoded.id);
if(!User)
{
    return res.status(403).json({
      status: "403",
      message:" Token has Expired Please Login",
    });  
}

if(User)
{
    req.usertable =User;
    next();
    }

}
catch (error)
{
    return res.status(500).json({
      status: "500",
      message:"failed To Login",
      error: error.message,
    });
}
}
export default CommentAuth;