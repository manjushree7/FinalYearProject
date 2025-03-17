/*import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mstmanjushree:<db_password>@cluster0.8ihfy.mongodb.net/MY_MERN_STACK_PROJECT').then(()=>console.log("DB Connected"));
}
*/

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};
