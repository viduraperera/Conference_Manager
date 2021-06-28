import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, getPosts, updatePost } from '../../actions/post';
import { getUser } from '../../actions/auth';

import Posts from './Posts';

function AdminPanel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.auth.user);
  const [filterPosts, setFilterPosts] = useState(posts);
  const [search, setSearch ] = useState('');

  useEffect(() => {
    dispatch(getPosts());
  }, [posts]);

  const handleApprove = (post) => { //if post is deleted make a delete request
    let postItem = { ...post };
    console.log(postItem);
    if(postItem.isDeleted && postItem.status){
      setFilterPosts(post?.posts?.filter((post)=> post.id !== postItem._id));
      dispatch(deletePost(postItem._id));
    }
    postItem.status = true;
    postItem.approved_by = user._id;
    dispatch(updatePost({ ...postItem }));
  };
  const handleReject = (post) => {
    let postItem = { ...post };
    postItem.status = false;
    if(postItem.isDeleted){
      postItem.isDeleted = !postItem.isDeleted;
      postItem.status = true
    } 
     
    postItem.approved_by = user._id;
    dispatch(updatePost({ ...postItem }));
  };

  useEffect(()=>{
    let searchItems = posts?.posts?.filter(post=> post?.title?.toLowerCase().includes(search.toLowerCase()) || post?.category.toLowerCase().includes(search.toLowerCase()));
    setFilterPosts(searchItems)
  },[search, posts])

  return (
    <div className="container">
      <div className="row">
        <div className="row m-2">
          <input className="form-control" type="text" placeholder='Search by Title or Category' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        {filterPosts?.map((post) => (
          <div className="col-md-3" key={post._id}>
            <Posts post={post} handleApprove={handleApprove} handleReject={handleReject} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
