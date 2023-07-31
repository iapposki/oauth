import dotenv from 'dotenv';
dotenv.config();

const config = {
    passportConfig : {
        googleClientID : process.env["CLIENT_ID"] || "",
        googleClientSecret : process.env["CLIENT_SECRET"] || "",
    },
    db : {
        databaseURL : process.env["DATABASE_URL"] || "",
    }
}

export default config