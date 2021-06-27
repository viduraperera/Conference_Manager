import { GET_POSTS } from '../constants/constants';
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
