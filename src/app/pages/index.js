import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  // Function to fetch posts data
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts data on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle navigation to post page
  const handlePostClick = (postId) => {
    router.push(`/post/${postId}`);
  };

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* Use onClick to navigate to post page */}
            <a onClick={() => handlePostClick(post.id)}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
