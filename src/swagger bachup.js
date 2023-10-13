// const { Router } = require('express');
// const { serve, setup } = require('swagger-ui-express');

// const docrouter = Router();

// const local = process.env.LOCAL_HOST;
// const heroku = process.env.DB_CONNECT;


// const options = {
//   openapi: '3.0.1',
//   info: {
//     title: 'My Blog',
//     version: '1.0.0',
//     description:
//       'This is the backend api for my blog.',
//   },
//   host: process.env === 'production' ? heroku : local,
//   basePath: '/api',
// security: [
//   {
//     bearerAuth: [],
//   }
// ],
// tags: [
//       {name: 'Users', description: ' This holds Users information'},
//       {name: 'Blogs', description: 'This holds blogs information'},
//     ],
//   paths: {
   
//     // Users tag
//     '/api/klab/users/signup': {
//       post: {
//       tags: ['Users'],
//       description: 'Create new user',
//       security: [],
//       parameters: [],
//       requestBody: {
//         content: {

//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//             example: {
//               firstname: 'john',
//               lastname: 'peter',
//               email:'e@gmail.com',
//               password:'1234',
//               role:'user',


//             },
//           },
//           'multipart/form-data': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         200: {
//           description: 'Your have been created',
//         },
//         400: {
//           description: 'Invalid credation',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       }, 
//       } 
//   },

//   '/api/klab/users/login': {
//     post: {
//     tags: ['Users'],
//     description: 'User login',
//     security: [],
//     parameters: [],
//     requestBody: {
//       content: {
//         'application/json': {
//           schema: {
//             $ref: '#/components/schemas/User',
//           },
//           example: {
//             email: 'admin@gmail.com',
//             password: '123456',
//           },
//         },
//       },
//       required: true,
//     },
//     responses: {
//       200: {
//         description: 'successfully',
//       },
//       400: {
//         description: 'Invalid credation',
//       },
//       500: {
//           description: 'Internal Server Error'
//       }
//     }, 
//     } 
// },

// '/api/klab/users/update{id}': {
//   put: {
//   tags: ['Users'],
//   description: 'Edit user cridentials',
//   parameters: [
//     {
//       "in": "path",
//     "name": "id",
//      required: true,
//    }
//   ],
//   requestBody: {
//     content: {
//       'application/json': {
//         schema: {
//           $ref: '#/components/schemas/User',
//         },
//         example: {
//           firstname: 'eric',
//           lastname: 'kalisa',
//           email:'e@gmail.com',
//           password:'1234',
//           profile:'ubcduydghfb3rewehfnociq3lewhd.jpg',
//           role:'user',
//         },
//       },
//     },
//     required: true,
//   },
//   responses: {
//     200: {
//       description: 'successfully',
//     },
//     400: {
//       description: 'Invalid credation',
//     },
//     500: {
//         description: 'Internal Server Error'
//     }
//   }, 
//   } 
// },

// '/api/klab/users/delete{id}': {
//   delete: {
//   tags: ['Users'],
//   description: 'Edit user cridentials',
//   parameters: [
//     {
//       "in": "path",
//     "name": "id",
//      required: true,
//    }
//   ],
//   requestBody: {
//     content: {
//       'application/json': {
//         schema: {
//           $ref: '#/components/schemas/User',
//         },
//         example: {
//           firstname: 'eric',
//           lastname: 'kalisa',
//           email:'e@gmail.com',
//           password:'1234',
//           profile:'ubcduydghfb3rewehfnociq3lewhd.jpg',
//           role:'user',
//         },
//       },
//     },
//     required: true,
//   },
//   responses: {
//     200: {
//       description: 'successfully',
//     },
//     400: {
//       description: 'Invalid credation',
//     },
//     500: {
//         description: 'Internal Server Error'
//     }
//   }, 
//   } 
// },

   
//   '/api/klab/users/view': {
//     get: {
//       tags: ['Users'],
//       description: 'It displays logged users',
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {



//             },
//           },
//           'multipart/form-data': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' view all users',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },
 

//   '/api/klab/users/view{id}': {
//     get: {
//       tags: ['Users'],
//       description: 'It displays only one logged user',
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//             example: {
//               firstname: 'uwineza',
//           lastname: 'alice',
//           email:'ali@gmail.com',
//           password:'1234',
//           profile:'ubcduydghfb3rewehfnociq3lewhd.jpg',
//           role:'user',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' view one user',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },
// // create blod end-points
// '/api/klab/blog/create': {
// post: {
//     tags: ['Blogs'],
//     description: 'Create New Blog',
//     security: [],
//     parameters: [],
//     requestBody: {
//       content: {
//         'application/json': {
//           schema: {
//             $ref: '#/components/schemas/User',
//           },
//           example: {
//           id:'4672e8uiwdhvbcsd098',
//           blogTitle:'kigali news',
//           blogContent:'welcome',
//           blogComment:'yes',
//           blogImage:'guidfhguieh/images/iotrfhjgv.jpg',
//           },
//         },
//       },
//       required: true,
//     },
//     responses: {
//       201: {
//         description: ' your blog successfull created',
//       },
//       400: {
//         description: 'Wrong Request',
//       },
//       500: {
//           description: 'Internal Server Error'
//       }
//     },
//   },
// },
//   // blogs  tag
//   '/api/klab/blog/read': {
//     get: {
//       tags: ['Blogs'],
//       description: 'It displays all posted blogs',
//       security: [],
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/Blogs',
//             },
//             example: {
//             id:'4672e8uiwdhvbcsd098',
//             blogTitle:'kigali news',
//             blogContent:'welcome',
//             blogComment:'yes',
//             blogImage:'guidfhguieh/images/iotrfhjgv.jpg',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' view your blogs here',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },
//  // read blog end-points
//   '/api/klab/blog/read {id}': {
//     get: {
//       tags: ['Blogs'],
//       description: 'It displays one ',
//       security: [],
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//             example: {
//               id:'4672e8uiwdhvbcsd098',
//               blogTitle:'kigali news',
//               blogContent:'welcome',
//               blogComment:'yes',
//               blogImage:'guidfhguieh/images/iotrfhjgv.jpg',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' view your blogs here',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },
 
//   '/api/klab/blog/update{id}': {
//     put: {
//       tags: ['Blogs'],
//       description: 'Edit blog',
//       security: [],
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//             example: {
//               id:'4672e8uiwdhvbcsd098',
//               blogTitle:'kigali news',
//               blogContent:'welcome',
//               blogComment:'yes',
//               blogImage:'guidfhguieh/images/iotrfhjgv.jpg',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' view your blogs here',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },
//   '/api/klab/blog/delete{id}': {
//     delete: {
//       tags: ['Blogs'],
//       description: 'Remove blog',
//       security: [],
//       parameters: [],
//       requestBody: {
//         content: {
//           'application/json': {
//             schema: {
//               $ref: '#/components/schemas/User',
//             },
//             example: {
//               id:'4672e8uiwdhvbcsd098',
//               blogTitle:'kigali news',
//               blogContent:'welcome',
//               blogComment:'yes',
//               blogImage:'guidfhguieh/images/iotrfhjgv.jpg',
//             },
//           },
//         },
//         required: true,
//       },
//       responses: {
//         201: {
//           description: ' your blog already deleted',
//         },
//         400: {
//           description: 'Wrong Request',
//         },
//         500: {
//             description: 'Internal Server Error'
//         }
//       },
//     },
//   },

//   },
  
//   components: {
//     schemas: {
//       User: {
//         type: 'object',
//         properties: {
//           firstname: {
//             type: 'string',
//             description: "User's firstname",
//           },
//           lastname: {
//             type: 'string',
//             description: "User's lastname",
//           },
//           email: {
//             type: 'string',
//             description: "User's email",
//           },
//           password: {
//             type: 'string',
//             description: "User's password",
//           },
//           role: {
//             type: 'string',
//             description: "User role",
//           },
//           profile: {
//             type: 'string',
//             description: "cintains user url image",
//             format: 'binary',
//           },
//         },
//       },
//       Blogs: {
//         type: 'object',

//         properties: {
//           blogTitle: {
//             type: 'string',
//             description: " title of the blog",
//           },
//           blogContent: {
//             type: 'string',
//             description: "content of the blog",
//           },
//           blogComment: {
//             type: 'string',
//             description: "comment of the blog commented by user",
            
//           },
//           blogImage: {
//             type: 'string',
//             description: " image url",
            
//           },
//           Creator: {
//             type: 'string',
//             description: " image url",
            
//           },
//           Creator_profile: {
//             type: 'string',
//             description: " image url",
            
//           },
//       },
//     },
    
//      },
//      security:[
  
//     securitySchemes: {
//     bearerAuth: {
//       type: 'http',
//       scheme: 'bearer',
//       bearerFormat: 'JWT',
//     },
//   },
//      ],
// },

// }

// docrouter.use('/', serve, setup(options));
// module.exports = docrouter;

