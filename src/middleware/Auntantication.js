import Jwt  from "jsonwebtoken";
import usertable from "../model/userModel";
const Authorization = async (req,res,next) =>{
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
const logedUser = await usertable.findById(decoded.id);

if(!logedUser)
{
    return res.status(403).json({
      status: "403",
      message:" Token has Expired Please Login",
    });  
}

if(logedUser.role !=="admin")
{
    return res.status(404).json({
      status: "404",
      message:" Only Loged Here As Adimin operation",
    
    });  
}
else{
    req.authenticatedUser = logedUser;
    next();
}
    } 

    catch(error) {
    return res.status(500).json({
      status: "500",
      error: error.message,
    });
    }

}
export default Authorization;