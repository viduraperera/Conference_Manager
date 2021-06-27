import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, updatePost } from '../../actions/post';
import { useHistory } from 'react-router-dom';

import Keynote from './Keynote';

function Keynotes() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  let history = useHistory();

  const keynotes = posts?.posts?.filter((post) => post.category === 'keynote');

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (post) => {
    let deletedPost = { ...post };
    deletedPost.isDeleted = true;
    console.log(deletedPost);
    dispatch(updatePost({ ...deletedPost }));
  };
  const handleUpdate = (post) => {
    history.push(`/editor/${post._id}`);
  };

  return (
    <div>
      {keynotes?.map((keynote) => (
        <Keynote post={keynote} key={keynote._id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
}

export default Keynotes;
