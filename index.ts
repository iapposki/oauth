import express, {Request, Response, Express} from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app : Express = express();
const port : Number = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

// setup view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req : Request, res : Response) => {
    res.render('home')
})


if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app;
