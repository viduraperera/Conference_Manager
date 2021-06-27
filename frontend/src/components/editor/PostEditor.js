import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/post';
import { useLocation } from 'react-router-dom';

import { getUser } from '../../actions/auth';
import { getPost, updatePost } from '../../actions/post';

const PostEditor = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  const [convertedText, setConvertedText] = useState('Create your post...');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState(false);
  const [defaultSelect, setDefaultSelect] = useState('');

  const options = [
    { value: 'keynote', label: 'Keynote' },
    { value: 'call_for_research_papers', label: 'Call For Papers' },
    { value: 'call_for_workshops', label: 'Call For Workshops' },
  ];

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.auth.user);

  const postId = location.pathname.split('/')[2].trim();
  if (postId) {
    useEffect(() => {
      dispatch(getPost(postId));
    }, []);
  }
  const postState = useSelector((state) => state.post);
  const post = postState?.post;
  useEffect(() => {
    console.log();
    if (post) {
      setTitle(post.title);
      setDefaultSelect(options.findIndex((item) => item.value === post?.category));
      setConvertedText(post.description);
    }
  }, [postState]);

  const handleSave = () => {
    if (title && category) {
      let postItem = {
        _id: post?._id,
        title,
        category,
        description: convertedText,
        user: user._id,
        isDeleted: false,
        status: post?.status,
      };
      console.log(postItem);
      if (post) {
        postItem.status = false;
        dispatch(updatePost({ ...postItem }));
      } else {
        dispatch(createPost({ ...postItem }));
      }
    } else {
      handleErrors();
    }
  };

  const handleErrors = () => {
    if (!title) {
      setTitleError(true);
    }
    if (!category) {
      setCategoryError(true);
    }
  };
  return (
    <div className="container">
      <h1>Create Post</h1>
      <div className="col-md-6 py-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          placeholder="Post Title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
            setTitleError(false);
          }}
        />
        {titleError ? <div className="text-danger">Please enter a title</div> : ''}
      </div>
      <div className="col-md-6 py-3">
        <label className="form-label">Category</label>
        <Select
          options={options}
          defaultValue={options[defaultSelect]}
          onChange={(e) => {
            setCategory(e.value);
            setCategoryError(false);
          }}
        />
        {categoryError ? <div className="text-danger">Please select a category</div> : ''}
      </div>
      <ReactQuill theme="snow" value={convertedText} onChange={setConvertedText} />
      <button type="button" className="btn btn-outline-primary my-3" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default PostEditor;
