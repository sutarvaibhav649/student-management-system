import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

//----------- * environment variables configuration * -------------------- 
dotenv.config({
    path:"./.env"
});

//------------ * Database Connection * -------------------
connectDB();


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is listening in port : ${port}`);
});

