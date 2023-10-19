import mongoose from "mongoose";
import usertable from "./userModel";
import {commentSchema} from"../model/CommentModel";
import { Schema } from "mongoose";
const PostSchema = new mongoose.Schema({
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
  comment:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'comments',
  }]
});

const blogModel = mongoose.model("Blogs", PostSchema);

export default blogModel;