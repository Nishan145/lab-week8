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
  try {
    const posts = await getAllPosts();
    console.log("Fetched posts:", posts); // Logging fetched posts
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error); // Logging error if fetch fails
    return {
      props: {
        posts: [],
      },
    };
  }
}
