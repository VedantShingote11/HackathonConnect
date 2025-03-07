import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'


export async function POST(request) {

    const api_key = "batrb46ztebr";
    const api_secret = "aywfmpm3zze7n9jgxjfxuxwyy6e58yc5ya73r7utvpu942z37zja6remna87eswh";

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const newTeam = await request.json();  // Expecting { teamName: "New Team Name" }

    const { teamName } = newTeam.teamName;

    try {
        // Fetch all users from Clerk
        const allUsers = await clerkClient.users.getUserList();
        const userIds = allUsers.map(user => user.id);

        // Create a channel for the new team
        const channel = serverClient.channel('messaging', teamName, {
            image: 'https://getstream.io/random_png/?name=react',
            name: `Talk about ${teamName}`,
            created_by_id: userIds[0], // Assuming the first user creates it
        });

        await channel.create();

        // Add all users to the new team's channel
        await channel.addMembers(userIds);

        console.log(`Channel created for team ${teamName} and users added.`);

        return Response.json({ message: `Team ${teamName} created and users added.` });
    } catch (error) {
        console.error("Error creating team channel:", error);
        return Response.json({ message: "Failed to create team channel", error });
    }
}
