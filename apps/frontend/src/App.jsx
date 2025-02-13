import Articles from "./components/Articles";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">My Blog</h1>
      
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold">Blog Posts</h2>
        <Posts />

        <h2 className="text-xl font-semibold mt-6">Articles</h2>
        <Articles />
      </div>
    </div>
  );
}

export default App;
