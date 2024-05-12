import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addComment } from "../../lib/posts";

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add comment to the post
    await addComment(postId, name, comment);
    // Redirect to the same page to refresh and display the new comment
    router.replace(router.asPath);
  };

  return (
    <div>
      <h1>Individual Post</h1>
      <p>Post ID: {postId}</p>
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
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
