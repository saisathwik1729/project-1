import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import  { connectDB }  from "./lib/db.js";

const app =express();
const PORT=process.env.PORT;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/chat", chatRoutes);


app.listen(PORT,()=> {
    console.log(`Server is runnig on port ${PORT}`);
    connectDB();
});