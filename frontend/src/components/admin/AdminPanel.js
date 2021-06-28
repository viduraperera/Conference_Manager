import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, updatePost } from '../../actions/post';
import { getUser } from '../../actions/auth';

import Posts from './Posts';

function AdminPanel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);

  const handleApprove = (post) => {
    let postItem = { ...post };
    postItem.status = true;
    postItem.approved_by = user._id;
    dispatch(updatePost({ ...postItem }));
  };
  const handleReject = (post) => {
    let postItem = { ...post };
    postItem.status = false;
    postItem.approved_by = user._id;
    dispatch(updatePost({ ...postItem }));
  };
  return (
    <div className="container">
      <div className="row">
        {posts?.posts?.map((post) => (
          <div className="col-md-3" key={post._id}>
            <Posts post={post} handleApprove={handleApprove} handleReject={handleReject} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
