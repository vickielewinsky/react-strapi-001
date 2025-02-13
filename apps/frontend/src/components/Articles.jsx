import { useEffect, useState } from "react";

const API_URL = "http://localhost:1337/api/articles"; // Change if deployed

function Articles() {
  const [articles, setArticles] = useState([]);
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
        setArticles(data.data); // Strapi returns { data: [...] }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading articles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul className="grid gap-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{article.Tittle}</h2>
            <div className="text-gray-700">
              {article.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-xl font-bold">
                      {block.children[0]?.text}
                    </h2>
                  );
                } else if (block.type === "paragraph") {
                  return <p key={index}>{block.children[0]?.text}</p>;
                }
                return null;
              })}
            </div>
            <p className="text-sm text-gray-500">
              Published: {new Date(article.publishedAt).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
