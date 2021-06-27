import React, { useEffect } from 'react';
import parser from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../actions/auth';
import { ROLES } from '../../constants/constants';

function Keynote({ post, handleUpdate, handleDelete }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="container">
      <div class="text-center">{parser(post?.description)}</div>
      {user?.role === ROLES.USER.RESEARCHER ? ( //TODO: Update this to editor
        <>
          <button type="button" className="btn btn-outline-warning mx-2" onClick={() => handleUpdate(post)}>
            Update
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(post)}>
            Delete
          </button>
        </>
      ) : (
        'bye'
      )}
    </div>
  );
}

export default Keynote;
