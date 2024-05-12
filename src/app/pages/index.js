import React from "react";
import Link from "next/link";
import { getAllPosts } from "../lib/posts.js";

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
