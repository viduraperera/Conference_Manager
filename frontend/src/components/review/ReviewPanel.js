import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
import { getResearch, updateResearch } from '../../actions/research'
import { getWorkshops } from '../../actions/workshop'
import ReviewCard from './ReviewCard';
import { useToasts } from 'react-toast-notifications';

function ReviewPanel() {
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    useEffect(() => {
        dispatch(getUser());
        dispatch(getResearch());
        dispatch(getWorkshops());
    }, []);

    const user = useSelector((state) => state.auth.user);
    const posts = useSelector((state) => state.research.researches);
    const [search, setSearch ] = useState('');
    useEffect(() => {
        dispatch(getResearch());
    }, [posts]);
    // console.log(user);
    const handleApprove = async(post) => {
        let postItem = { ...post };
        postItem.status = true;
            
        postItem.approved_by = user._id;
        const res = await dispatch(updateResearch({ ...postItem }));
        if(res.status === 200){
            addToast('Post Approved Successfully.', { appearance: 'success', autoDismiss: true, });
        } else {
            addToast('Post Update Error', { appearance: 'error', autoDismiss: true, });
        }
    }

    const handleReject = async (post) => {
        let postItem = { ...post };
        postItem.status = false;
            
        postItem.approved_by = user._id;
        const res = await dispatch(updateResearch({ ...postItem }));
        if(res.status === 200){
            addToast('Post Rejected Successfully.', { appearance: 'success', autoDismiss: true, });
        } else {
            addToast('Post Update Error', { appearance: 'error', autoDismiss: true, });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="row m-2">
                    <input className="form-control" type="text" placeholder='Search by Title or Category' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                {posts?.map((post)=>(
                    <div className="col-md-3" key={post._id}>
                        <ReviewCard post={post} handleApprove={handleApprove} handleReject={handleReject} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewPanel
