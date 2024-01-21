import express from "express"
import cors from 'cors'
import productRouter from './routes/productRoutes.js'
import offerRouter from './routes/offerRoutes.js'

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

app.use('/', productRouter)
app.use('/offer', offerRouter)

app.listen(3000, () => {
    console.log(`Server listening on: 3000`);
})

