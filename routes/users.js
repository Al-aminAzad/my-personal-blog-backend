import  express  from "express";

//File import
import { signin, signup } from '../controllers/user.js'

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);


export default router;