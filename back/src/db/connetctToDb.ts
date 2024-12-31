import { TerorrEvent } from "../models/terorrEvents";

const mongoose = require("mongoose");
const fs = require("fs/promises")
const path = "C:/Users/C0548/OneDrive/שולחן העבודה/final_poject/back/src/db/data.json"
const uri = `mongodb+srv://c0548519466:PG16duesrOpGC03R@cluster0.ejtci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const readData = async ()=> {
    const data = await fs.readFile(path, 'utf8');
    const parseData = JSON.parse(data)
    return parseData
}


export default async () => {
  try {
    // const jasonData = await readData()
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    // try {
    //     await TerorrEvent.insertMany(jasonData)
    //     console.log("read sec")
    // } catch (error) {
    //     console.log("cuoldnot read",error)
    // }
    console.log("connect to db")
  } catch (err) {
    console.log(`cant connect to db${err}`);
  }
};
