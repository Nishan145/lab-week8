import { getAllPosts } from "../src/app/lib/posts.js";

export default function Test({ posts }) {
  return (
    <div>
      <h1>Test Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
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
