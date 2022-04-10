import express  from "express";

//File import
import { getPost, createPost } from '../controllers/post.js'

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);

export default router;