import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

//Import routes
import blogRoutes from "./routes/blogRoutes";
// import docrouter from "../documentation/swagger";

// import userRoute from "./routes/userroutes";
import usersRoutes from "./routes/usersRoutes";

const app = express();
dotenv.config();

// Require app to use imported configurations

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// swagger configration
const options ={
  definition: {
    openapi : '3.0.0',
    info : {
      title: ' Backend Documentation of My blog',
      version: '1.0.0'
    },
    servers:[
      {
        // url: 'https://klabblogapi.onrender.com/'
        url: 'http://localhost:5200/'
      }
    ],
    security:[
      {
BearerAuth:[],
      }
    ],
    components:{
      securitySchemes:{
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    }
  },
  apis: ['./src/documentation/*.js'], //determination of path
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//Determination of routes

app.use("/api/klab/blog",blogRoutes);
// app.use("/api/klab/user",userRoute);
app.use("/api/klab/users",usersRoutes);





app.get('/api',(req,res) =>{
  res.status(200).json({
    status: "Welcome",
    author: "MUGABO John Peter",
    message: "Welcome To My API",
  });
});

export default app;