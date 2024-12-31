import { Request, Response } from "express";
import {deadliestTypes} from "../service/analysisService"

export const deadliestTypesController = async (
  req: Request,
  res: Response
): Promise<void> => {
    try{
        const result = await deadliestTypes()
        res.status(200).json({
            err:false,
            massge:"types of attacks casualties",
            body:result
        }
        )
    }
    catch (err){
        console.log(err)
        res.sendStatus(400)
    }
};
