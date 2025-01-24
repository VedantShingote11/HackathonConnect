import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db("HackathonConnect");
const collection = db.collection("teamDetails");

export async function POST(request) {
    try {

        const data = await request.json();

        console.log("Received data:", data);
        
        await collection.insertOne(data);

        return NextResponse.json({ success: true, data });
    
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
    }
}
export async function GET(request){
    try {

        const allData = await collection.find({}).toArray();

        console.log("Fetched data:", allData);
        return NextResponse.json({ success: true, data: allData });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
    }
}
export async function DELETE(request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { success: false, error: "ID is required" },
                { status: 400 }
            );
        }

        const result = await collection.deleteOne({ id });

        return NextResponse.json({ success: true, message: "Team deleted successfully" });
    } catch (error) {
        console.error("Error in deleting data:", error);
        return NextResponse.json(
            { success: false, error: "Failed to delete data" },
            { status: 500 }
        );
    }
}




