import { GET_POSTS, GET_POST } from '../constants/constants';

const PostReducer = (state = null, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action?.payload };
    case GET_POST:
      return { ...state, post: action?.payload };
    default:
      return state;
  }
};

export default PostReducer;
