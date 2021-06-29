import { GET_POSTS, GET_POST } from '../constants/constants';
import * as api from '../api/index.js';

//getting workshops
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    // dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.getPost(postId);
    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (post) => async (dispatch) => {
  try {
    const res = await api.updatePost(post);
    getPosts();
    return {...res}
  } catch (error) {
    console.error(error);
    return {...error}
  }
};
export const deletePost = (postId) => async (dispatch) => {
  try {
    const res = await api.deletePost(postId);
    return {...res}
    getPosts();
  } catch (error) {
    console.error(error);
    return {...error}
  }
};
