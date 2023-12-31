import mongoose from "mongoose";
import { Schema } from "mongoose";
const {ObjectId} = mongoose.Schema;

// Comment Model-side
export const commentSchema= new mongoose.Schema({
  commentMessage:{
  type:String,
  require:true,
},
user:{
  type: ObjectId,
  ref:"users",
  require:true,

},
username:{
  type:String,
  ref:"users",
  require:true,
},

userPhoto:{
  type:String,
  ref:"users",
  require:true,
},

PostId:{
    type:Schema.Types.ObjectId,
    ref:"postModel",
    require:true,
},

time:{
  type:Date,
  default: Date.now,
},
});
const CommentModel = mongoose.model("comments", commentSchema);
export default CommentModel;