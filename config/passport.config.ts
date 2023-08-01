import dotenv from 'dotenv';
import passport from 'passport';
import GooglePassport from 'passport-google-oauth20'
const passportConfig = require('./config').default.passportConfig
import {PrismaClient, Prisma} from '@prisma/client'
import { User } from '@prisma/client';
dotenv.config();

const prisma = new PrismaClient();
declare global {
    namespace Express {
        interface User {
            id : String;
        }
    }
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id : any, done) =>{
    const user = await prisma.user.findFirst({
        where : {id : id}
    })
})

passport.use(new GooglePassport.Strategy({
    // options for strategy
    clientID : passportConfig.googleClientID,
    clientSecret : passportConfig.googleClientSecret,
    callbackURL : "/auth/google/redirect"
}, async (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback function fired.')
    // console.log(profile)



    try {
        var user : User | null = await prisma.user.findFirst({
            where : {googleID : profile.id}
        })
        
        if (!user){
            console.log('making new account')
            user = await prisma.user.create({
                data : {
                    userName : profile.displayName,
                    googleID : profile.id
                }
            })
        }
        done(null, user)
        // console.log(user)
    } catch (error) {console.log('An error occured while creating/logging the user', error)}

}));

export default passport;