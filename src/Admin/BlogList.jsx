import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogList() {
  const navigator = useNavigate();
  const [postLists , setPostLists] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/post')
    .then((res) => res.json())
    .then((data) => {
      setPostLists(data);
    })
  }, [])
  
  return (
    <div className='admin-contant'>
        <div className="admin-contant-cover">
            <div className="container">
                <div className="admin-contant-details">
                    <div className='bloglist'>
                      <div className="title">
                        <h2>Blogs List</h2>
                        <button onClick={()=>{navigator('/addblog')}}><span>+</span>ADD</button>
                      </div>
                      <div className="post-list">
                        {
                          postLists.map((postList) => {
                            return(
                              <div className="post" key={postList.id}>
                                <span>{postList.title}</span>
                                <div className="action">
                                  <button className='editBtn'>Edit</button>
                                  <button className='deleteBtn'>Delete</button>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
