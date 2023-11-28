import { RequestHandler } from 'express'
import os from 'os'
export const OsDetails:RequestHandler=(req,res)=>{
    try {
        return res.status(200).json({data:{userName:os.userInfo().username,machineName:os.hostname()}})
    } catch (error) {
        return res.status(500).json({data:null,error:error})
    }
}