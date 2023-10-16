/**
 * @swagger
 * /api/myblog/users/signup:
 *   post:
 *     summary: Create  Account.
 *     tags: [users]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *                 
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       500:
 *         description: Registration failed.
 * /api/myblog/users/login:
 *   post:
 *     summary:  Login into The system.
 *     tags: [users]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User Logged in successfully.
 *       500:
 *         description: Login  failed.
 * 
 * /api/myblog/users/view:
 *   get:
 *     summary: Get a list of all registered users.
 *     tags: [users]
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of all users.
 *       500:
 *         description: Failed to retrieve user data.
 * /api/myblog/users/view/{id}:
 *   get:
 *     summary: Get a single user by their ID.
  *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the user.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to retrieve user data.
 * 
 * /api/myblog/users/delete/{id}:
 *   delete:
 *     summary: Delete a user by their ID.
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete.
 *     responses:
 *       200:
 *         description: User information deleted successfully.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
*         description: Failed to delete user data.
 * 
 * /api/myblog/users/update/{id}:
 *   put:
 *     summary: Update a user's information by their ID.
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *                role:
 *                  type: string
 *     responses:
 *       200:
 *         description: User information updated successfully.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
*         description: Failed to update user data.

 */