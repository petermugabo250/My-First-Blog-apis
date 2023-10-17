import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;
const commentSchema= new mongoose.Schema({
Usercomment:{
  type:String,
  require:true,
},
user:{
  type: ObjectId,
  ref:"users",
  require:true,

},
blogId:{
    type:ObjectId,
    ref:"blogmode",
    require:true,
},
blogTitle:{
type:String,
ref:"blogmode",
},
time:{
  type:Date,
  default: Date.now,
},
});
const usercomments = mongoose.model("comments", commentSchema);
export default usercomments;