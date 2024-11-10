// require("dotenv").config()
// const express = require("express")
// const cors = require("cors")
// const passport = require("passport")
// const cookieSession = require("cookie-session")

import express from "express"
import cors from "cors"
import cookieSession from "cookie-session"
import dotenv from "dotenv"
import passport from "passport"


const app = express()

dotenv.config()

app.use(cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
}))

app.use(passport.initialize())
app.use(passport.session())


app.use(cors({
    origin: "http://localhost:3000/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

const port = process.env.PORT || port
app.listen(port, () => console.log(`Listenting on port ${port}`))
console.log("Hello word First time i code lab")