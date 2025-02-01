import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const db = client.db("HackathonConnect");
const collection = db.collection("notifications");

export async function POST(request) {

    try{
        const data = await request.json();

        if(!data){
            return NextResponse.json({success : false});
        }

        await collection.insertOne(data);

        return NextResponse.json({success : true});
    }
    catch(error){
        console.log("error occurred");
        return NextResponse.json({success : false , error});
    }
}

export async function GET(request) {

    try{

        const email = request.nextUrl.searchParams.get("email");

        const result = await collection.find({ receiverId: email }).toArray();
        return NextResponse.json({success:true , data:result})
    }
    catch(error){
        return NextResponse.json(error)
    }
}