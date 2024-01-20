import express from "express"
import cors from 'cors'

const app = express()

app.use(
    cors({
        origin: [
            "http://localhost:5000",
        ],
        credentials: true,
    }))

app.use(express.json())
app.use(express.urlencoded({extended: true }))

// app.use('/', userRouter)

app.listen(3000, () => {
    console.log(`Server listening on: 3000`);
})

