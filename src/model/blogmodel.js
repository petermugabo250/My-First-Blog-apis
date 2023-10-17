import mongoose from "mongoose";
import usertable from "./userModel";
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
  PostedDate:{
  type: Date,
  default:Date.now,
  },
  comments:[]
});

const blogmode = mongoose.model("Blogs", blogschema);

export default blogmode;