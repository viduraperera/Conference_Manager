import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/auth';
import { getResearch } from '../../actions/research'
import { getWorkshops } from '../../actions/workshop'
import ReviewCard from './ReviewCard';

function ReviewPanel() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
        dispatch(getResearch());
        dispatch(getWorkshops());
    }, []);
    const user = useSelector((state) => state.auth.user);
    const posts = useSelector((state) => state.research.researches);
    const [search, setSearch ] = useState('');
    console.log(posts);
    return (
        <div className="container">
            <div className="row">
                <div className="row m-2">
                    <input className="form-control" type="text" placeholder='Search by Title or Category' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                {posts?.map((post)=>(
                    <div className="col-md-3" key={post._id}>
                        <ReviewCard post={post}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewPanel
