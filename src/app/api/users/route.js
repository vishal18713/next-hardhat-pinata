import { NextResponse } from "next/server";
import connectToDB from "../../../../utils/database";
import user from "../../../../models/user";

export const GET = async(request) => {
    try {
        await connectToDB();

        const users = await user.find();
        console.log(user); 
        return new NextResponse(JSON.stringify(user),{status:200});
    } catch (error) {
        return new NextResponse("Error in fetching user"+error,{status:500});
    }
}