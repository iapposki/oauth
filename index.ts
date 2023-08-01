import express, {Request, Response, Express} from "express";
import bodyParser from "body-parser";
import cors from "cors";
const passportSetup = require('./middleware/passport')
import cookieSession from "cookie-session";
const cookieSessionConfig = require('./config/config').default.cookieSessionConfig
import authRoutes from "./routes/auth.routes";
import profileRoutes from "./routes/profile.routes";
import passport from "passport";

const app : Express = express();
const port : Number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieSession({
    // maxAge in ms
    maxAge : 24*60*60*1000,
    // key secret for cookie
    keys : [cookieSessionConfig.secret]
}));
app.use(passport.initialize());
app.use(passport.session());

// setup view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req : Request, res : Response) => {
    res.render('home')
})

// setup routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app;
