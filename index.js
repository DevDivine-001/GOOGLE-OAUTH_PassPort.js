import express from "express"
import cors from "cors"
import cookieSession from "cookie-session"
import dotenv from "dotenv"
import passport from "passport"
import authRoute from "./routes/routes.js"
import { passportConfig } from "./passport.js"


const app = express()

dotenv.config()

app.use(cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
}))

passportConfig(passport)

app.use(passport.initialize())
app.use(passport.session())


app.use(cors({
    origin: "http://localhost:3000/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute)
const port = process.env.PORT || port
app.listen(port, () => console.log(`Listenting on port ${port}`))
console.log("Hello word First time using PassPort.js For GOOGLE OAUTH WEB APPLICATION")

