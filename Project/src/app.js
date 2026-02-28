import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import the centralized error handler
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



//Routes imports
import userRouter from './routes/user.routes.js';



//Route declaration
app.use("/api/v1/users", userRouter); //http://localhost:8000/api/v1/users/register




















// Centralized Error Handling Middleware
// This must be the last middleware added to the app.
app.use(errorHandler);

export { app } 