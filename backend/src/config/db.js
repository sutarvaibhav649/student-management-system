import mongoose from "mongoose";

//------------- * function to connect database * ---------------------

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"taskmanger"
        });
        console.log("Database Connected: ",conn.connection.host);
    } catch (error) {
        console.error("Database connection failed");
        console.error(error.message);
        process.exit(1); // hard fail 
    }
}

export default connectDB;