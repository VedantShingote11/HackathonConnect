import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

const api_key = "batrb46ztebr";
const api_secret = "aywfmpm3zze7n9jgxjfxuxwyy6e58yc5ya73r7utvpu942z37zja6remna87eswh";

export async function GET(request) {
    const serverClient = StreamChat.getInstance(api_key , api_secret);
    const userId = "user_2snU0hPl8e3s2mX9kCNuWUmSg2U"

    const token = serverClient.createToken(userId);

    console.log(userId , " has token " , token)

    const client = await clerkClient()

    await client.users.updateUserMetadata(userId, {
        publicMetadata:{
            token:token
        },
    })

    return Response.json({message : "Meta data created"})
}