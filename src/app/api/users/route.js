// import { NextResponse } from "next/server";
// import connectToDB from "../../../../utils/database";
// import user from "../../../../models/user";

export const GET = async(request, res) => {
 
    const a ="hello world";
    return new Response(a);
  
    
}

import connectToDB from '../../../../utils/database';
import User from '../../../../model/user';

export const POST=async(req, res)=>{
 
    
    try {
      await connectToDB();
      
      const {username}=await req.json();
        
      // Create a new user document
      const newUser = new User({ username });
      await newUser.save();
      return new Response(username);
      // return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  
  
}

