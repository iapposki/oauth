import express, {Router, Request, Response} from "express";
import middleware from '../middleware/passport'

const router : Router = express.Router();

router.get('/',middleware.authCheck , (req: Request, res: Response) => {
    if (req.user) {
        res.send('you are logged in, this is your profile : ' + req.user.userName)

    } else {
        res.send('no user logged in.')
    }
})


export default router;