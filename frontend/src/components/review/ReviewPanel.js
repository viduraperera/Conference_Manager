import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUser } from '../../actions/auth';
import { getResearch, updateResearch } from '../../actions/research'
import { getWorkshops, updateWorkshops } from '../../actions/workshop'
import ReviewCard from './ReviewCard';
import { useToasts } from 'react-toast-notifications';

function ReviewPanel() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { addToast } = useToasts();
    useEffect(() => {
        dispatch(getUser());
        dispatch(getResearch());
        dispatch(getWorkshops());
    }, []);

    const type = location.pathname.split('/')[1];

    let posts = [];
    const user = useSelector((state) => state.auth.user);
    const researches = useSelector((state) => state.research.researches);
    const workshops = useSelector((state) => state.workshop.workshops);

    if(type === 'reviewWorkshop'){
        posts = workshops
    } else {
        posts = researches
    }
    const [search, setSearch ] = useState('');
    useEffect(() => {
        dispatch(getResearch());
    }, [researches]);

    useEffect(() => {
        dispatch(getWorkshops());
    }, [workshops]);

    const handleApprove = async(post) => {
        let postItem = { ...post };
        postItem.status = true;
            
        postItem.approved_by = user._id;
        if (type === 'reviewWorkshop') {
            const res = await dispatch(updateWorkshops({ ...postItem }));
            if(res.status === 200){
                addToast('Workshop Approved Successfully.', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Workshop Update Error', { appearance: 'error', autoDismiss: true, });
            }
        } else {
            const res = await dispatch(updateResearch({ ...postItem }));
            if(res.status === 200){
                addToast('Research Approved Successfully.', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Research Update Error', { appearance: 'error', autoDismiss: true, });
            }
        }
    }

    const handleReject = async (post) => {
        let postItem = { ...post };
        postItem.status = false;
            
        postItem.approved_by = user._id;
        if (type === 'reviewWorkshop') {
            const res = await dispatch(updateWorkshops({ ...postItem }));
            if(res.status === 200){
                addToast('Workshop Rejected Successfully.', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Workshop Update Error', { appearance: 'error', autoDismiss: true, });
            }
        } else {
            const res = await dispatch(updateResearch({ ...postItem }));
            if(res.status === 200){
                addToast('Research Rejected Successfully.', { appearance: 'success', autoDismiss: true, });
            } else {
                addToast('Research Update Error', { appearance: 'error', autoDismiss: true, });
            }
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="row m-2">
                    <input className="form-control" type="text" placeholder='Search by Title or Category' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                {type === 'reviewWorkshop'? <h2 className="text-center">Review Workshop Proposals</h2> : <h2 className="text-center">Review Research Proposals</h2>}
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
