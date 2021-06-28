import React, { useEffect } from 'react';
import parser from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../actions/auth';
import { ROLES } from '../../constants/constants';

function EditorPost({ post, handleUpdate, handleDelete }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="container">
      <div class="text-left">{parser(post?.description)}</div>
      {user?.role === ROLES.USER.RESEARCHER ? ( //TODO: Update this to editor
        <>
          <div className="row">
            <div className="col-md-2">
              Status: {post?.status ? <span class="badge bg-success">Approved</span> : <span class="badge bg-danger">Rejected</span>}
            </div>
            <div className="col-md-2">
              Is Deleted: {post?.isDeleted ? <span class="badge bg-danger">Deleted</span> : <span class="badge bg-success">Not Deleted</span>} 
            </div>
            <div className="col-md-2">
              Is Reviewed: {post?.approved_by ? <span class="badge bg-success">Reviewed</span> : <span class="badge bg-danger">Not Reviewed</span>} <br />
            </div>
          </div>
          <button type="button" className="btn btn-outline-warning m-2" onClick={() => handleUpdate(post)}>
            Update
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(post)}>
            Delete
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default EditorPost;
