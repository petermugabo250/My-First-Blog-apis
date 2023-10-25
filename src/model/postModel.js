import mongoose from "mongoose";
import usertable from "./userModel";
import CommentModel from "./CommentModel";
import {commentSchema} from"./CommentModel";
import { Schema } from "mongoose";
// Post-Model side
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
  }],
  views: { type: Number, default: 0 },
  
});

const postModel = mongoose.model("Posts", PostSchema);

export default postModel;