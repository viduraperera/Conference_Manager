import React from 'react'

function ReviewCard({ post, handleApprove, handleReject }) {
    return (
        <div className="card m-2">
            <div className="card-title m-2">Title:<b> {post?.title}</b></div>
            <div className="card-body">
                <div className="card-text">
                    {post?.description} <br />
                    <b>Status</b>: {post?.status ? <span class="badge bg-success">Approved</span> : <span class="badge bg-danger">Rejected</span>} <br />
                    <b>Is Reviewed</b>: {post?.approved_by ? <span class="badge bg-success">Reviewed</span> : <span class="badge bg-danger">Not Reviewed</span>}
                </div>
                <a className="btn btn-outline-success my-2" href={`http://localhost:5000/${post?.path}`}>View File</a>
                <hr />
                <div className="row">
                    <div className="col">
                    <button type="button" className="btn btn-outline-success m-2" onClick={() => handleApprove(post)}>
                        Approve
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => handleReject(post)}>
                        Reject
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
