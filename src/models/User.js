import mongoose from "mongoose";

// Destructuring 'Schema' from 'mongoose'
 const {Schema} = mongoose;

 // Defining a schema for the 'User' collection
 const userSchema = new Schema({
    email:{type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:false
    },
},
// jab bhi hum register krenge to time bhi note ho jayega user ka kab register kiya
    {timestamps:true}
 )
 // Exporting the User model if it already exists, otherwise creating a new User model using the userSchema
 export default mongoose.models.User || mongoose.models("User", userSchema);