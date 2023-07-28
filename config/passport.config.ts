import dotenv from 'dotenv';
import passport from 'passport';
import GooglePassport from 'passport-google-oauth20'
const passportConfig = require('./config').passportConfig

dotenv.config();

passport.use(new GooglePassport.Strategy({
    // options for strategy
    clientID : passportConfig.googleClientID,
    clientSecret : passportConfig.googleClientSecret,
    callbackURL : "/auth/google/redirect"
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback function fired.')
    console.log(profile)
}));

export default passport;