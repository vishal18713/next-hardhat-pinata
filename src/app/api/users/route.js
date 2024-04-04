// import { NextResponse } from "next/server";
// import connectToDB from "../../../../utils/database";
// import user from "../../../../models/user";

// export const GET = async(request) => {
//     try {
//         await connectToDB();

//         const users = await user.find();
//         console.log(user); 
//         return new NextResponse(JSON.stringify(user),{status:200});
//     } catch (error) {
//         return new NextResponse("Error in fetching user"+error,{status:500});
//     }
// }

import connectToDB from '../../../../utils/database';
import User from '../../../../model/user';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDB();
      const { username } = req.body;

      // Create a new user document
      const newUser = new User({ username });
      await newUser.save();

      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
