import React, { useState } from 'react'

export default function AddBlog() {
  const [newPost, setnewPost] = useState({
    title: '',
    content: '',
    image: '',
    headerImage:''
  });
  const {title, content, image, headerImage} = newPost;
  const handleNewPostSubmit =(e) => {
    e.preventDefault();
    console.log('New post submitted');
    console.log(newPost);
  }
  const handleNewPostChange =(e) => {
    setnewPost({
      ...newPost,
      [e.target.name]: e.target.value
      });
  }
  return (
    <div className='admin-contant'>
        <div className="admin-contant-cover">
            <div className="container">
                <h1 className='addBlogTitle'>Create A New Post</h1>

                <form onSubmit={handleNewPostSubmit}>
                  <input type="text" name="title" id="" placeholder='Post Title' className='inputpostTitle' onChange={handleNewPostChange} value={title}/>
                  <textarea name="content" id="" rows="10" placeholder="Your Content here..." className='textareaContent' onChange={handleNewPostChange} value={content}/>
                  <div className="file-wrap">
                  <input type="file" name="image" id="" className='file' onChange={handleNewPostChange} value={image}/>
                  <input type="file" name="headerImage" id="" className='file' onChange={handleNewPostChange} value={headerImage}/>
                  </div>
                  <input type="submit" value="Submit" className='newPostSubmitBtn'/>
                </form>
            </div>
        </div>
    </div>
  )
}
