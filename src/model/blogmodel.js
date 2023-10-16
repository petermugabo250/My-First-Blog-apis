import mongoose from "mongoose";
import usertable from "./userModel";
const {ObjectId} = mongoose.Schema;
const commentSchema= new mongoose.Schema({
Usercomment:{
  type:String,
  require:true,
},
commentedBy:{
  type:ObjectId,
  ref: usertable,
},
  commentDate:{
    type: Date,
    default:Date.now,
  },
});

const blogschema = new mongoose.Schema({
  blogImage: {
    type: String,
    require: false,
  },
  blogTitle: {
    type: String,
    require: true,
  },
  blogContent: {
    type: String,
    require: true,
  },
  // blogComment: {
  //   type: String,
  //   require: true,
  // },

  creator:{
    type: String,
    require: true,
  },
  creatorprofile:{
    type: String,
    require: true,
  },
  PostedOn:{
  type: Date,
  default:Date.now,
  },
  comments:[commentSchema] // use the arrays to add commentSchema
});

const blogmode = mongoose.model("Blogs", blogschema);

export default blogmode;