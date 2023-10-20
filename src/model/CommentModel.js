import mongoose from "mongoose";
import { Schema } from "mongoose";
const {ObjectId} = mongoose.Schema;
export const commentSchema= new mongoose.Schema({
CommentMessage:{
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
    ref:"blogmode",
    require:true,
},

time:{
  type:Date,
  default: Date.now,
},
});
const CommentModel = mongoose.model("comments", commentSchema);
export default CommentModel;