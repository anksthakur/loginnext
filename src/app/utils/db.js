// Import mongoose library for MongoDB connection 
import mongoose from "mongoose";

// asyn function  'connect' for connection with MongoDB
const connect = async () => {
    // Check krne ke ley ki connection hai to immediately return kre
    if (mongoose.connections[0].readyState) return;

    try {
        //  connect to MongoDB using the provided URL
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,          
            useUnifiedTopology: true,       
        });
        // agar connection shi huya to console m message aaye connected
        console.log("MongoDB connected");
    } catch (error) {
        //agar connection nhi huya to console m message aaye not connected
        throw new Error("Error connecting to Mongoose");
    }
}
export default connect;
