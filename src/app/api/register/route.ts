import User from '../../../models/User' // '@models/User'
import connect from '../../utils/db' // '@/utils/db'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (req:any)=>{
    // Extracting email and password from the request body
    const {email , password} = await req.json();
    // Establishing connection to the database
    await connect();
    // Checking if a user with the given email already exists in the database
    const existindUser = await User.findOne({email});
    if(existindUser){
        return new NextResponse("Email is already in use",{status:400});
    }
    // Hashing the password using bcryptjs with a salt round of 5
    const hashedPassword = await bcrypt.hash(password,5);
     // Creating a new instance of the User model with email and hashed password
    const newUser = new User({
        email,
        password:hashedPassword,
    })

    try {
        await newUser.save();
        return new NextResponse("User is Register",{status:200});
    } catch (error:any) {
        return new NextResponse(error,{status:500});
    }
}