import mongoose from "mongoose";

import dotenv from "dotenv";


dotenv.config()

const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const cluster = process.env.CLUSTER
const dbName = process.env.DB_NAME
const cloudUrl = `mongodb+srv://karthick:karthick123@pk.6c4jhfh.mongodb.net/`

const localDb = 'mongodb://localhost:27017'

export const connectToDb = async()=>{
    try{ 
        await mongoose.connect(cloudUrl, {
            useNewUrlParser : true
        })
        console.log('Db connected successfully')
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}