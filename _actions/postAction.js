'use server'
import postModel from "../models/postModel"
import connectDB from "../config/database"

export async function getpost(){
    try{
        await connectDB();
        const data = JSON.parse(JSON.stringify(await postModel.find()));
        // throw new Error('Error!')
        return {data}
    } catch (error) {
        return { errMsg: error.message}
    }
}