// import express from "express"
// import cors from "cors"

// import cookieSession from "cookie-session"
// import dotenv from "dotenv"
// import passport from "passport"
// import session from 'express-session';
// import authRoute from "./routes/routes.js"
// // import passportConfig from "./passport.js"
// import passportConfig from "./passport.js"


// const app = express()

// dotenv.config()

// app.use(cookieSession({
//     name: "session",
//     keys: ["cyberwolve"],
//     maxAge: 24 * 60 * 60 * 100,
// }))

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
// }));


// passportConfig()

// app.use(passport.initialize())
// app.use(passport.session())


// app.use(cors({
//     origin: "http://localhost:3000/",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
// }))


// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/'); // Redirect on successful login
//     }
// );
// app.use("/auth", authRoute)
// const port = process.env.PORT || port
// app.listen(port, () => console.log(`Listenting on port ${port}`))
// console.log("Hello word First time using PassPort.js For GOOGLE OAUTH WEB APPLICATION")

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import authRoute from "./routes/routes.js";
import passportConfig from "./passport.js"; // Import your passport configuration

const app = express();

dotenv.config();

// Configure session

passportConfig()
app.use(
    session({
        secret: process.env.SESSION_SECRET || "defaultSecret", // Ensure SESSION_SECRET is in your .env
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day in milliseconds
    })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Configure CORS
app.use(
    cors({
        origin: "http://localhost:3000", // No trailing slash
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

// Routes for Google Auth
app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/"); // Redirect on successful login
    }
);

// Use authRoute with corrected route prefix
app.use("/auth", authRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

const port = process.env.PORT || 4000; // Default port if not set in .env
app.listen(port, () => console.log(`Listening on port ${port}`));

console.log("Hello world! First time using Passport.js for Google OAuth web application.");
