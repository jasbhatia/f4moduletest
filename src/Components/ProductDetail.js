import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({ posts }) => {
  const { id } = useParams();
  const postId = Number(id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Detail Page For Post With ID {post.id}</p>
      <img
        src={post.imgSrc}
        alt={post.title}
        style={{ borderRadius: "15px" }}
      />
      <p>User ID: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default DetailPage;
