import express from "express";
import cors from "cors";
import router from "./routes/task.routes.js";

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

app.use("/api/tasks", router);

export default app;