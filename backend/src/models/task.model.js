import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title:{
            type:String,
            required:true,
            trim:true,
            minlength:3
        },
        description:{
            type:String,
            trim:true,
            default:""
        },
        priority:{
            type:String,
            enum:["low","medium","high"],
            default:"medium"
        },
        dueDate:{
            type:Date,
            required:true
        },
        completed:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;