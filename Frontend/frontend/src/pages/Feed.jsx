import React, { useState, useEffect } from 'react';
import axios from "axios";

const Feed = () => {
  const [posts, setPost] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      caption: "Beautifule image"
    }
  ]);

  useEffect(() => {
    
    axios.get("http://localhost:3000/create-post")
    .then((res) => {
      setPost(res.data.posts)
      
    })

  }, [])
  

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
             posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (<h1>No posts available</h1>)}
    </section>
  );
};

export default Feed;