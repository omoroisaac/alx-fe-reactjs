// src/App.jsx
import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Query Demo</h1>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      {showPosts && <PostsComponent />}

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;