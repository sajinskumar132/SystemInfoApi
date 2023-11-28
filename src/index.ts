import express from 'express'
import { OsDetails } from './controller'
import {config} from 'dotenv'
import cors from 'cors'
config()
const app=express()
app.use(cors())
app.get('/os-details',OsDetails)
app.listen(process.env.PORT,()=>{
    console.log('server is started')
})