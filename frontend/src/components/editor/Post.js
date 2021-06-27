import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import parser from 'html-react-parser';

function Post() {
  const user = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {user?.posts?.map((item) => {
        return parser(item.description);
      })}
    </div>
  );
}

export default Post;
