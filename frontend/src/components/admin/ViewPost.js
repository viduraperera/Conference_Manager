import React from 'react';
import parser from 'html-react-parser';

function ViewPost({ post }) {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#postModal">
        View Post
      </button>

      <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Title: {post.title}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>Category: {post.category}</h2>
              {parser(post.description)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
