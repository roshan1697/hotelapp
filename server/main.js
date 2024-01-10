import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

app.use(cors({
    
    origin: "http://localhost:5173",
}))


app.listen(3000)