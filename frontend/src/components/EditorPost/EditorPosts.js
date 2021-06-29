import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, updatePost } from '../../actions/post';
import { useHistory, useLocation } from 'react-router-dom';

import { ROLES } from '../../constants/constants';
import EditorPost from './EditorPost';
import { getUser } from '../../actions/auth';

function EditorPosts() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, []);
  const type = location.pathname.split('/')[1];

  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.auth.user);
  let keynotes = [];
  
  useEffect(()=>{
    dispatch(getPosts())
  },[posts])

  if(user?.role === ROLES.USER.RESEARCHER){
    keynotes = posts?.posts?.filter((post) => post.category === type);
  }else{
    keynotes = posts?.posts?.filter((post) => post.category === type && !post.isDeleted && post.approved_by && post.status);
  }

  const handleDelete = (post) => {
    let deletedPost = { ...post };
    deletedPost.isDeleted = true;
    deletedPost.status = false;
    deletedPost.approved_by = null;
      dispatch(updatePost({ ...deletedPost }));
  };
  const handleUpdate = (post) => {
    history.push(`/editor/${post._id}`);
  };

  return (
    <div>
      {
        keynotes?.length ? keynotes?.map((keynote) => (
          <EditorPost post={keynote} key={keynote._id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        )) : (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default EditorPosts;
