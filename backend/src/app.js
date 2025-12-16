import express from "express";
import cors from "cors";

const app = express();

//------------- * Global Middlewares * -------------
app.use(cors());
app.use(express.json());

//-------------- * Health check * -------------------
app.get("/health",(req,res)=>{
    res.status(200).json(
        {
            message:"App is running well"
        });
});

export default app;