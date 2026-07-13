import mongoose from "mongoose"; 
export const mongodb =() =>{
 mongoose.connect(process.env.MONGODB_URL)
    try {
       console.log(" data base connected "); 
    } catch (error) {
        console.log(" database not connected ");
    }
}