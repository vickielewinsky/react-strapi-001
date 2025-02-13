import Posts from "./components/Posts";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Blog</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <Posts />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <Articles />
      </section>
    </div>
  );
}

export default App;
