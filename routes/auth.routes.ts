import express, {Router, Request, Response} from "express";
import passport from "passport";

const router : Router = express.Router();

// auth login
router.get('/login', (req: Request, res: Response) => {
    res.render('login', {user : req.user})
})

// auth logout
router.get('/logout', (req: Request, res: Response) => {
    // to be handled with passport

    req.logout((err) => {
        if (err) {
            console.log(err)
        }
    });
    res.redirect('/');
})

// auth with google
router.get('/google', passport.authenticate("google", {
    // all the info needed from google which google asks permission for
    scope : ['profile',]
}))

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req: Request, res: Response) => {
    // console.log(req.user)
    // res.send('you have reached the callback uri.')
    res.redirect('/profile')
})

export default router;