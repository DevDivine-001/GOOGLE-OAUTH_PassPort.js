import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export const passportConfig = (passport) => {

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
                scope: ['profile', 'email'],
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile);
            }
        )
    );

    //     passport.serializeUser((user, done) => {
    //         done(null, user);
    //     });

    //     passport.deserializeUser((user, done) => {
    //         done(null, user);
    //     });
}

