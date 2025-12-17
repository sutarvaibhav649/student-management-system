import express from "express";
import cors from "cors";
import router from "./routes/task.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

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

// -------------- * global error handler *------------
app.use(errorHandler);

export default app;