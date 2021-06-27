import express from 'express';
import Post from '../Models/Post.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate({
        path: 'user',
        select: 'name',
      })
      .populate({
        path: 'approved_by',
        select: 'name',
      })
      .select('-__v');
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id })
      .populate({
        path: 'user',
        select: 'name',
      })
      .populate({
        path: 'approved_by',
        select: 'name',
      })
      .select('-__v');
    if (!post) return res.status(404).send('Post not found');
    return res.status(200).send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body });
    post.save((error, savedPost) => {
      if (error) return res.status(400).send(error);
      return res.status(201).send(savedPost);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const check = await Post.findById({ _id: req.params.id });
    if (!check) return res.status(404).send('Post not found');
    await Post.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send('Post Updated');
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const check = await Post.findById({ _id: req.params.id });
    if (!check) return res.status(404).send('Post not found');

    await Post.deleteOne({ _id: req.params.id }, (error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send('Post deleted');
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default router;
