import express  from "express";

//File import
import { getPost,getPostBySearch, createPost, updatePost, deletePost, likePost } from '../controllers/post.js'
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPost);
router.get('/search', getPostBySearch)
router.post('/', auth,createPost);
router.patch('/:id', auth,updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost);

export default router;