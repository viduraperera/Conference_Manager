import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parser from 'html-react-parser';

const PostEditor = () => {
  const [convertedText, setConvertedText] = useState('Create your post...');
  return (
    <div className="container">
      <h1>Create Post</h1>
      <ReactQuill theme="snow" value={convertedText} onChange={setConvertedText} style={{ minHeight: '300px' }} />
      <div>{parser(convertedText)}</div>
    </div>
  );
};

export default PostEditor;
