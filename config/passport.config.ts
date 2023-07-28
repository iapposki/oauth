import dotenv from 'dotenv';
import passport from 'passport';
import GooglePassport from 'passport-google-oauth20'

dotenv.config();

passport.use(new GooglePassport.Strategy({
    // options for strategy
    clientID : process.env["CLIENT_ID"] || "",
    clientSecret : process.env["CLIENT_SECRET"] || "",
    callbackURL : "/auth/google/redirect"
}, () => {
    // passport callback function
    console.log('passport callback function fired.')
}));

export default passport;