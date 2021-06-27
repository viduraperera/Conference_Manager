import express from 'express';
const router = express.Router();

import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js';

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
