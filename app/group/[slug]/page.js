import ChatGroup from "@/components/chatGroup"
import { currentUser } from '@clerk/nextjs/server'

const chat = async ({params}) => {
    const user = await currentUser();
    const slug = (await params).slug;

    return <ChatGroup slug={slug} clerkUser={{ id: user.id, name: user.firstName, token: user.publicMetadata.token }} />
}

export default chat