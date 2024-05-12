import React, { useState } from "react";
import { useRouter } from "next/router";
import { getPostById, addComment } from "../lib/posts.js";

export default function Post({ post }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment(post.id, name, email, comment);
    router.replace(router.asPath);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { postId } = params;
  const post = await getPostById(postId);
  return {
    props: {
      post,
    },
  };
}
