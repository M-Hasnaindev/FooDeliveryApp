import { connectionStr } from "@/lib/db";
import { resturantSchema } from "@/lib/retaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET() {
    // await mongoose.connect(connectionStr, {useNewUrlParser:true})
    // const data = await resturantSchema.find({})
    // console.log(data);
    return NextResponse.json({ result: true })
}