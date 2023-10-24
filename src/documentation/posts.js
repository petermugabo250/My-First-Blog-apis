/**
 * @swagger
 * /api/posts/create:
 *   post:
 *     summary: Post New Post.
 *     tags: [Posts]
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
 * /api/posts/read:
 *   get:
 *     summary: Get a list of all posted Posts.
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: list of all users.
 *       500:
*         description: Failed to retrieve user data.
 * /api/posts/read/{id}:
 *   get:
 *     summary: Get a single Post by their ID.
  *     tags: [Posts]
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
 * /api/posts/delete/{id}:
 *   delete:
 *     summary: Delete a Post by it's ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Delete Post Using It's ID.
 *     responses:
 *       200:
 *         description: Post information deleted successfully.
 *       404:
 *         description: Any not found with the provided ID.
 *       500:
*         description: Failed to delete Post data.
 * 
 * /api/posts/update/{id}:
 *   put:
 *     summary: Update a Post's information by their ID.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Post to update.
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
 *         description: A Post information updated successfully.
 *       404:
 *         description: A Post not found with the provided ID.
 *       500:
*         description: Failed to update Post data.
  /api/posts/comment/send/{id}:
 *   post:
 *     summary: Send Comment To A single Post.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               commentMessage:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment sent.
 *       500:
 *         description: Failed send comment.
 * /api/posts/comment/get/{id}:
 *   get:
 *     summary: Comments View By using Post Id.
 *     tags: [Comments]
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
 * 
 * /api/posts/comment/delete/{id}:
 *   delete:
 *     summary: Delete comments.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment deleted.
 *       500:
 *         description: Failed to delete comment.

 */