import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export default function passportConfig() {

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: 'http://localhost:8080/auth/google/callback',
                // callbackURL: '/auth/google/callback',
                scope: ['profile', 'email'],
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile);
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });


}

// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// export default function configurePassport(passport) {
//     passport.use(
//         new GoogleStrategy(
//             {
//                 clientID: process.env.CLIENT_ID,
//                 clientSecret: process.env.CLIENT_SECRET,
//                 callbackURL: '/auth/google/callback',
//                 scope: ['profile', 'email'],
//             },
//             function (accessToken, refreshToken, profile, done) {
//                 done(null, profile);
//             }
//         )
//     );

//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });

//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });
// }
