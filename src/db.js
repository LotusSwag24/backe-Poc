import mongoose from "mongoose";
import { URI_DB } from "./config.js";

export const connectDb = async() =>{
    try{
        await mongoose.connect(URI_DB)
        console.log(">>> Database Connected")
    }catch(err){
        console.log("Error connecting to database", err)
    }

}