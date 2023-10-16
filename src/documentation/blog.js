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
 *               blogTitle:
 *                 type: string
 *               blogContent:
 *                 type: string
 *               blogComment:
 *                 type: string
 *               blogImage:
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
 *     summary: Get a single blog by  ID.
  *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog retrieved.
 *     responses:
 *       200:
 *         description: Successfully retrieved the blog.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to retrieve Blog data.
 * 
 * /api/myblog/blog/delete/{id}:
 *   delete:
 *     summary: Delete a blog by their ID.
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to delete.
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
 *               blogTitle:
 *                 type: string
 *               blogContent:
 *                 type: string
 *               blogComment:
 *                 type: string
 *               blogImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: A blog information updated successfully.
 *       404:
 *         description: A blog not found with the provided ID.
 *       500:
*         description: Failed to update blog data.

 */