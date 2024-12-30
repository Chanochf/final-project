import { Aggregate } from "mongoose"
import { TerorrEvent } from "../models/terorrEvents"

export const deadliestTypes = async()=>{

    const response = await TerorrEvent.aggregate([
        
    ])
}