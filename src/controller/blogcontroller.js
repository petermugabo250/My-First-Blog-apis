
import blogmode from "../model/blogmodel";
import { uploadToCloud } from "../helper/cloud";

//import { async } from "q";

//Creating Blog

export const createBlog = async (req, res) =>{
  try {
    const {bogImage, blogTitle, blogContent} = req.body;
    let result;
    if(req.file) result = await uploadToCloud(req.file, res);
    const Blog = await blogmode.create({
    blogImage:  result?.secure_url || "https://res.cloudinary.com/dskrteajn/image/upload/v1675271488/hznovwf7ksuylz9qcd6d.jpg",
    blogTitle,
    blogContent,
    creator:req.usertable.lastname,
    creatorprofile:req.usertable.profile,
    PostedOn: req.usertable.PostedOn,


  });
  return res.status(200).json({
    message: "Your Blog Has Saved",
    data: Blog,
  })
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Failied To Create Blog",
      error: error.message,
    });
  }
};

// create comment
export const createComment = async(req,res) =>{
  try{
    const {id} = req.params;
    const {Usercomment} = req.body;
    const blog = await blogmode.findById(id);
  if(!blog)
  {
    return res.status(404).json({
      status:"404",
      message:"Blog Not found",
  

    });
  }
    const comment ={
      Usercomment,
      userid: req.usertable_id,
      username: req.usertable.lastname,
      userprofile: req.usertable.profile,
    }
     blog.comments.push(comment); await blog.save();
    return res.status(200).json({
      status:"200",
      message:"Comment added Succefully",
      data: blog,
    })
  }
  catch (error){
    return res.status(201).json({
      status:"201",
      message:"Failed to comment",
      error: error.message,
    })
  }
}

//getting all data

export const allBlogs = async (req,res) =>{
  try {
    const gettaallinfo = await blogmode.find();
    return res.status(200).json({
      statusbar: "You Made It",
      message: "All Blogs Are here:",
      data: gettaallinfo,
    })
  } catch (error) {
    return res.status(500).json({
      statusbar: "Sorry Something Went Wrong",
      message: "failed To Display Blog Information",
      error: error.message,

    });
    
  }
};

// Getting Blog By Blog id

export const blogById = async (req,res) =>{
  try {
    const {id} = req.params;
    const blogid = await blogmode.findById(id);
    if(!blogid){
      return res.status(404).json({
        message: "Blog Id Not Found",
      });

    }
    return res.status(200).json({
      statusbar: "Blog Id Found",
      message: "Congratrations",
      data: blogid,
    })
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Id Not Found 🤦‍♀️🤦‍♀️",
      error: error.message,
    });
    
  }
};
// Deleting Blog By Blog Id

export const deleteBlogById = async (req, res) =>{
  try {
    const {id} = req.params;
    const findid = await blogmode.findById(id);
    if(!findid)
    return res.status(404).json({
      message: "Blog Id Not Found",
});
const deletefoundid = await blogmode.findByIdAndDelete(id);
return res.status(201).json({
  statusbar: "Processes Succeed",
  message: "Blog Deleted Successfully",
  data: deletefoundid,
});
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed To Delete Blog",
      message: "Entered Id Not Found",
      error: error.message,
    });
    
  }
};

 //Updating Blog By Id
 
//  export const updateBlog = async (req, res) =>{
//   const { id } = req.params;
//   try {
//   const {blogImage, blogTitle, blogContent, blogComment} = req.body;
//   const getId = await blogmode.findById(id);
//   if (!getId)
//     return res.status(404).json({
//       message: "Id not Found",
//       error: error.message,
//     });

//     let result;
//     if(req.file) result = await uploadToCloud(req.file, res);
//     await blogmode.findByIdAndUpdate(id, {
//      blogImage:  result?.secure_url || "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
//      blogTitle,
//      blogContent, 
//      blogComment,
//     });



//     return res.status(201).json({
//      message: "Success",
//    });
 
// } catch (error) {
//  return res.status(500).json({
//    message: "Failded to Update",
//    error: error.message
//  })
 
// }
// };

export const updateBlog = async (req, res) =>{
  const { id } = req.params;
  try {
  const {blogImage,blogTitle, blogContent,blogComment} = req.body;
  const getId = await blogmode.findById(id);
  if (!getId)
    return res.status(404).json({
      message: "Id not Found",
    });

    let result;
    if(req.file) result = await uploadToCloud(req.file, res);
const myblog = await blogmode.findByIdAndUpdate(id, {
      blogImage:  result?.secure_url || "https://res.cloudinary.com/da12yf0am/image/upload/v1696850499/pbxwlozt1po8vtbwyabc.jpg",
     blogTitle,
     blogContent,
     blogComment,
    })
    return res.status(201).json({
    status:"201",
     message: "Your Data hove been updated",
     data: myblog,

   });
 
} catch (error) {
 return res.status(500).json({
  status:"500",
   message: "Failded to Update",
   error: error.message
  })
}
};