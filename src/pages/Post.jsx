import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function Post() {
  const [postDetails, setPostDetails] = useState({})
  const {title} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3001/post?title=${encodeURIComponent(title)}`)
    .then((res)=>res.json())
    .then((data)=>setPostDetails(data[0]))
  },[title])
  return (
    <div>
      <div className="postHeaderBg" style={{background: `url(${postDetails.headerImage})`, backgroundRepeat:`no-repeat`, backgroundPosition:`center`, backgroundSize: `cover`}}>
        <div className="postheaderbgContent">
          <h1>{postDetails.title}</h1>
        </div>
      </div>
      <div className="container">
        <h1 className='postdetailsConent'>{postDetails.content}</h1>
      </div>
    </div>
  )
}
