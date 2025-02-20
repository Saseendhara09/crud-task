import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connecDB from './config/mongodb.js'
import cookieParser from 'cookie-parser'
import crudRouts from './routes/crud.js'
import bodyParser from 'body-parser'


const app=express()

const port =process.env.PORT ||4001
connecDB()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.use("/api/users", crudRouts)


app.listen(port,()=>console.log(`server connected ${port} `  ))
