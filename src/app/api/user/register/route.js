import User from "@/schemas/user"

import dbConnect from "@/lib/db"


export async function POST(request) {
    
    await dbConnect()

    const user = new User({
        email: "Example@gmail.com",
        password: "123456789"
    })

    //To save this user template to the Dan folder in the database
    const data = await user.save()
    return Response.json({"message": data})

}