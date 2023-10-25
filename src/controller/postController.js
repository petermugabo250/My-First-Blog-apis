import postModel from "../model/postModel";
import CommentModel from "../model/CommentModel";
import { uploadToCloud } from "../helper/cloud";
import userModel from "../model/userModel";
//Creating Post

export const createPost = async (req, res) => {
  try {
    const {PostTitle, PostContent,PostImage} = req.body;
    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const Post = await postModel.create({
      PostImage:
      result?.secure_url || "https://res.cloudinary.com/dvl09mzee/image/upload/v1697657307/yvvbyjuf0nnakpsh25il.jpg",
        PostTitle,
        PostContent,
      creator: req.authenticatedUser.lastname,
      creatorprofile: req.authenticatedUser.profile,
      PostedDate: req.authenticatedUser.PostedDate,
    });
    return res.status(200).json({
      status:"200",
      message: "Your post have been created",
      data: Post,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failied to create Post",
      error: error.message,
    });
  }
};

// // create comment
export const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { authenticatedUser } = req;
    const { commentMessage} = req.body;
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({
        status: "404",
        message: "Post not found",
        data:{}
      });
    }
    const newComment = await CommentModel.create({
      commentMessage,
      user: authenticatedUser.id,
      username:req.authenticatedUser.lastname,
      userPhoto:req.authenticatedUser.profile,
      PostId:post._id,

    });

    const updatePost = await postModel.findByIdAndUpdate(
      id,
      {$push: {comment:newComment._id}},
      {new:true}
    )
    return res.status(200).json({
      status: "200",
      message: "Comment added Succefully",
      comment: newComment,
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
    const gettAllcomment = await CommentModel
      .find({PostId:id,}).populate("user","firstname ");
    return res.status(200).json({
      status: "200",
      message: "All comments are here:",
      data: gettAllcomment,
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      status: "500",
      message: "Fail to fetch data",
    });
  }
};


// Update Comments
export const updateComment = async (req,res)=>{
  const { id } =req.params;
  try{
    const {commentMessage}= req.body;
    const commentId = await CommentModel.findById(id);
    if(!commentId)
    return res.status(404).json({
  status:"404",
  message:"Commet id not found",
  data:commentId,
  })
  const myComment= await CommentModel.findByIdAndUpdate(id,{
 commentMessage,
  })
  return res.status(200).json({
    status:"200",
    message:"Your comment updated successful",
    data: myComment,
  })


  }
  catch (error){
    return res.status(500).json({
      status:"500",
      message:"Failed to update",
      error:error.message,

    })
  }

}

// Delete comments by id
export const DeletecommentbyId = async(req,res)=>{
  const { id }=req.params;
  try{
    const findId = await CommentModel.findById(id);
    if(!findId)
    return res.status(404).json({
  status:"404",
  message:"Comment id not found try again",
  data:findId,
  })
  const deleteComment = await CommentModel.findByIdAndDelete(id);
  return res.status(200).json({
    status:"200",
    message:"Comment deleted succesful",
    data: deleteComment,
  })
  }
  catch(error){
    return res.status(500).json({
      status:"500",
      message:"Sorry failed to delete Comment",
      error:error.message,

    })
  }
}
//getting allPosts

export const getAllPosts = async (req, res) => {
  try {
    const getPosts = await postModel.find().populate({path:'comment', select: 'user commentMessage username userPhoto'});
    return res.status(200).json({
      status: "200",
      message: "All posts re here:",
      data: getPosts,
    });

  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "failed to display posts Information",
      error: error.message,
    });
  }
};

// Getting Post By id

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const Postid = await postModel.findById(id).populate({path:'comment', select:'user commentMessage username userPhoto'});
    if (!Postid) {
      return res.status(404).json({
        message: "Post Id Not Found",
      });
    }

    // Increment the view count for the post
    Postid.views += 1; // Increment the views field by 1
    await Postid.save(); // Save the updated post with the incremented view count

    return res.status(200).json({
      status: "200",
      message: "Congratrations",
      data: Postid,
    });
  } catch (error) {
    return res.status(404).json({
      status: "404",
      message: "Id not found Please try again ",
      error: error.message,
    });
  }
};
// Deleting Post By Id

export const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const findid = await postModel.findById(id);
    if (!findid)
      return res.status(404).json({
        status:"404",
        message: "Post Id Not Found",
      });
    const deleteFoundid = await postModel.findByIdAndDelete(id);
    return res.status(201).json({
      status: "200",
      message: "Post Deleted Successfully",
      data: deleteFoundid,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Post id not Found",
      error: error.message,
    });
  }
};
// Update post by Id
export const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const { PostImage, PostTitle, PostContent } = req.body;
    const getId = await postModel.findById(id);
    if (!getId)
      return res.status(404).json({
        status:"404",
        message: "Id not found",
      });

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const myPost = await postModel.findByIdAndUpdate(id, {
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