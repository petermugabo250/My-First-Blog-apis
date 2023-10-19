/**
 * @swagger
 * /api/myblog/blog/create:
 *   post:
 *     summary: Post New Blog.
 *     tags: [Blogs]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               PostTitle:
 *                 type: string
 *               PostContent:
 *                 type: string
 *               PostImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Your post have been posted.
 *       500:
 *         description: Failed To Post.
 * /api/myblog/blog/read:
 *   get:
 *     summary: Get a list of all posted blogs.
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: list of all users.
 *       500:
*         description: Failed to retrieve user data.
 * /api/myblog/blog/read/{id}:
 *   get:
 *     summary: Get a single Post by their ID.
  *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Post to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to retrieve user data.
 * /api/myblog/blog/delete/{id}:
 *   delete:
 *     summary: Delete a blog by it's ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Delete Blog Using It's ID.
 *     responses:
 *       200:
 *         description: blog information deleted successfully.
 *       404:
 *         description: Any not found with the provided ID.
 *       500:
*         description: Failed to delete blog data.
 * 
 * /api/myblog/blog/update/{id}:
 *   put:
 *     summary: Update a blog's information by their ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               PostTitle:
 *                 type: string
 *               PostContent:
 *                 type: string
 *               PostImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: A blog information updated successfully.
 *       404:
 *         description: A blog not found with the provided ID.
 *       500:
*         description: Failed to update blog data.
/api/myblog/blog/comment/post/{id}:
 *   post:
 *     summary: User Comment.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Usercomment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment sent.
 *       500:
 *         description: Failed send comment.
 * /api/myblog/blog/comment/get/{id}:
 *   get:
 *     summary: Comments View.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment retreived view here.
 *       500:
 *         description: Failed to retrieve comment.

 */