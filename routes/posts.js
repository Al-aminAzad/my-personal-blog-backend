import express  from "express";

//File import
import { getPosts,getPost,getPostBySearch, createPost, updatePost, deletePost, likePost, commentPost } from '../controllers/post.js'
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPosts);
router.get('/:id',getPost)
router.get('/search', getPostBySearch)
router.post('/', auth,createPost);
router.patch('/:id', auth,updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost);
router.post('/:id/commentPost',auth, commentPost);

export default router;