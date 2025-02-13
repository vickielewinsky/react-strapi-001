import { useEffect, useState } from "react";

const API_URL = "http://localhost:1337/api/posts"; // Change when deploying

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.data); // Strapi returns { data: [...] }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{post.Tittle}</h2>
            <div className="text-gray-700">
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return <p key={index}>{block.children[0]?.text}</p>;
                }
                return null;
              })}
            </div>
            <p className="text-sm text-gray-500">
              Published: {new Date(post.publishedAt).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
