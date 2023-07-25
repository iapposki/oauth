import express, {Request, Response, Express} from "express";

const app : Express = express();
const port : Number = 3000;

// setup view engine
app.set('view engine', 'ejs');




if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app;
