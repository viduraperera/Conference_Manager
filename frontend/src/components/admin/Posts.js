import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../actions/auth';
import { ROLES } from '../../constants/constants';
import ViewPost from './ViewPost';

function Posts({ post, handleApprove, handleReject }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="card m-2">
      <h5 className="card-title m-2">Title: {post?.title}</h5>
      <div className="card-body">
        <div class="card-text">
          Category: {post?.category} <br />
          Status: {post?.status ? <span class="badge bg-success">Approved</span> : <span class="badge bg-danger">Rejected</span>} <br />
          Deleted: {post?.isDeleted ? <span class="badge bg-danger">Deleted</span> : <span class="badge bg-success">Not Deleted</span>} <br />
          Is Reviewed: {post?.approved_by ? <span class="badge bg-success">Reviewed</span> : <span class="badge bg-danger">Not Reviewed</span>}
        </div>
      </div>

      {user?.role === ROLES.USER.RESEARCHER ? ( //TODO: Update this to editor
        <div className="col">
          <ViewPost post={post} />
          <hr />
          <button type="button" className="btn btn-outline-success m-2" onClick={() => handleApprove(post)}>
            Approve
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={() => handleReject(post)}>
            Reject
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Posts;
