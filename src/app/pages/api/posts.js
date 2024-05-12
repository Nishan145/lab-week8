export default async function handler(req, res) {
  try {
    const response = await fetch("YOUR_VERCEL_FUNCTION_URL");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
