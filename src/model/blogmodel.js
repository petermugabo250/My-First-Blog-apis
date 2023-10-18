import mongoose from "mongoose";
import usertable from "./userModel";
import {commentSchema} from"../model/CommentModel";
const blogschema = new mongoose.Schema({
  PostImage: {
    type: String,
    require: true,
  },
  PostTitle: {
    type: String,
    require: true,
  },
  PostContent: {
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
  PostedDate:{
  type: Date,
  default:Date.now,
  },
  comments:[commentSchema],
});

const blogmode = mongoose.model("Blogs", blogschema);

export default blogmode;