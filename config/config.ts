import dotenv from 'dotenv';
dotenv.config();

const config = {
    passportConfig : {
        googleClientID : process.env["CLIENT_ID"] || "",
        googleClientSecret : process.env["CLIENT_SECRET"] || "",
    },
    db : {
        databaseURL : process.env["DATABASE_URL"] || "",
    },
    cookieSessionConfig : {
        secret : process.env["COOKIE_SESSION_SECRET"] || "secret"
    }, 
    loginURL : "http://localhost:3000/auth/login"
}

export default config