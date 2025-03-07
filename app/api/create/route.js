import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const clientDB = new MongoClient(uri);

const db = clientDB.db("HackathonConnect");
const collection = db.collection("teamDetails");

const api_key = "batrb46ztebr";
const api_secret = "aywfmpm3zze7n9jgxjfxuxwyy6e58yc5ya73r7utvpu942z37zja6remna87eswh";
// const user_id = "user_2sdA4qa7qKwoFIcvN5aN6MFbJ8G";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()

    const token = serverClient.createToken(user.data.id);
    console.log("NEW USER IS CREATED with token ", token);

    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id })

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })

    const slugs = []

    try {

        const teams = await collection.find({}).toArray();
        const teamNames = teams.map(team => team.teamName);

        slugs.push(...teamNames)

    } catch (error) {
        return Response.json({ error });
    }

    console.log(slugs)


    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: 'Talk about React',
            created_by_id: user.data.id,
        });
        await channel.create()
        channel.addMembers([user.data.id])
    })

    return Response.json({ message: "Done" });
}

