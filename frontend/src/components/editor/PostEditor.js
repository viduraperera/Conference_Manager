import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parser from 'html-react-parser';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';

const PostEditor = () => {
  const dispatch = useDispatch();

  const options = [
    { value: 'keynote', label: 'Keynote' },
    { value: 'call_for_research_papers', label: 'Call For Papers' },
    { value: 'call_for_workshops', label: 'Call For Workshops' },
  ];
  const [convertedText, setConvertedText] = useState('Create your post...');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState(false);

  const handleSave = () => {
    if (title && category) {
      console.log(title, category, convertedText);
      const post = {
        title,
        category,
        description: convertedText,
      };
      dispatch(createPost({ ...post }));
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
