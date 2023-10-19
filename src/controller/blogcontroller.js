import blogModel from "../model/blogmodel";
import Comments from "../model/CommentModel";
import { uploadToCloud } from "../helper/cloud";
import userModel from "../model/userModel";
//Creating Post

export const createPost = async (req, res) => {
  try {
    const {PostImage, PostTitle, PostContent} = req.body;
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const Post = await blogModel.create({
      PostImage:
        result?.secure_url ||
        "https://res.cloudinary.com/dskrteajn/image/upload/v1675271488/hznovwf7ksuylz9qcd6d.jpg",
        PostTitle,
        PostContent,
      creator: req.authenticatedUser.lastname,
      creatorprofile: req.authenticatedUser.profile,
      PostedDate: req.authenticatedUser.PostedDate,
    });
    return res.status(200).json({
      message: "Your Post have been created",
      data: Post,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "500",
      message: "Failied To Create Post",
      error: error.message,
    });
  }
};

// // create comment
export const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { authenticatedUser } = req;
    const { CommentMessage} = req.body;
    const post = await blogModel.findById(id);
    if (!post) {
      return res.status(404).json({
        status: "404",
        message: "Post Not found",
        data:{}
      });
    }
    const comments = await Comments.create({
      CommentMessage,
      user: authenticatedUser,
      username:req.authenticatedUser.lastname,
      userPhoto:req.authenticatedUser.profile,
      PostId:post._id,

    });

    await blogModel.findByIdAndUpdate(
      id,
      {$push: {comment:comments._id}},
      {new:true}
    )
    return res.status(200).json({
      status: "200",
      message: "Comment added Succefully",
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed to comment",
      error: error.message,
    });
  }
};

// fetch comments using Post Id
export const allcomment = async (req, res) => {
  const { id } = req.params;
  try {
    const gettAllcomment = await Comments
      .find({PostId:id,}).populate("user","firstname lastname ");
    return res.status(200).json({
      status: "200",
      message: "All comments Are here:",
      data: gettAllcomment,
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      status: "500",
      message: "fail to fetch Data",
    });
  }
};

//getting allPosts

export const getAllPosts = async (req, res) => {
  try {
    const gettaallinfo = await blogModel.find().populate({path:'comment', select: 'CommentMessage user username userphoto'});
    return res.status(200).json({
      statusbar: "You Made It",
      message: "All Posts Are here:",
      data: gettaallinfo,
    });

  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "failed To Display Posts Information",
      error: error.message,
    });
  }
};

// Getting Post By id

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogid = await blogmode.findById(id);
    if (!blogid) {
      return res.status(404).json({
        message: "Blog Id Not Found",
      });
    }
    return res.status(200).json({
      statusbar: "Blog Id Found",
      message: "Congratrations",
      data: blogid,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Id Not Found 🤦‍♀️🤦‍♀️",
      error: error.message,
    });
  }
};
// Deleting Post By Id

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const findid = await blogModel.findById(id);
    if (!findid)
      return res.status(404).json({
        status:"404",
        message: "Post Id Not Found",
      });
    const deletefoundid = await blogModel.findByIdAndDelete(id);
    return res.status(201).json({
      status: "201",
      message: "Post Deleted Successfully",
      data: deletefoundid,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Post Id Not Found",
      error: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const { PostImage, PostTitle, PostContent } = req.body;
    const getId = await blogModel.findById(id);
    if (!getId)
      return res.status(404).json({
        status:"404",
        message: "Id not Found",
      });

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const myPost = await blogModel.findByIdAndUpdate(id, {
      PostImage:
        result?.secure_url ||
        "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
      PostTitle,
      PostContent,
    });
    return res.status(201).json({
      status: "201",
      message: "Your Data hove been updated",
      data: myPost,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failded to Update",
      error: error.message,
    });
  }
};