import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/post')
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setPosts([...data])
      })
  }, [])
  const truncateString = (words, num) =>{
    let word = words.split(" ");
    if(word.length>num){
      return word.slice(0, num).join(" ") + " . . .";
    }else{
      return word.slice(0, word.langth).join(" ");
    }
  }
  return (
    <div className="blogPage">
      <h1 className='blogTitle'>Blog</h1>
      <div className="container">
        <div className="blogItems">
          {
            posts.map(post => {
              const {id, title, image, content} = post;
              return(
                <Link to={`${post.title}`} className="blogItem" key={id}>
                  <div className="blogItemImg">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog-details">
                  <h4 className='postTitle'>{title}</h4>
                  <p className='postDes'>{truncateString(content, 20)}</p>
                  </div>
                </Link>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}
