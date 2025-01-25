import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db("HackathonConnect");
const collection = db.collection("hackathonDetail");

export async function GET(request){
    try{
        const allData = await collection.find({}).toArray();

        return NextResponse.json({ success: true, data: allData });
    }catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
    }
}