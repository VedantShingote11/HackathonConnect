import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db("HackathonConnect");
const collection = db.collection("userProfile");

export async function GET(request) {
    try{
            const result = await collection.findOne({});
            const email = result.email;
            return NextResponse.json({success:true , email:email})
        }
        catch(error){
            return NextResponse.json(error)
        }
}