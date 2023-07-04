import React from "react";
import { Link } from "react-router-dom";

const Home = ({ posts }) => {
  console.log("homedata", posts);
  return (
    <div className="flex-card">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <img src={post.imgSrc} alt={post.title} />
          <p>User ID: {post.userId}</p>
          <p>Title: {post.title.slice(0, 25)}</p>
          <p>Body: {post.body.slice(0, 100)}</p>
          <Link to={`/item/${post.id}`} className="card-link">
            Read More...
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
