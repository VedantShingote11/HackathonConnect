import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db("HackathonConnect");
const collection = db.collection("userInfo");

export async function GET(request) {

    try {

        const query = await request.nextUrl.searchParams.get("query");

        if (!query) {
            return NextResponse.json({ error: "No search query provided" }, { status: 400 });
        }

        let searchQuery = {};

        searchQuery = {
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { college: { $regex: query, $options: "i" } },
                { domain: { $regex: query, $options: "i" } }
            ]
        };

        const results = await collection.find(searchQuery).toArray();

        console.log(results);
        return NextResponse.json({ success: true , result : results});
    }
    catch (error) {
        return NextResponse.json({ error: error, success: false });
    }
}

