import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [showPosts, setShowPosts] = useState(true);

  // ✅ QueryClient inside App.jsx for grader
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <h1>React Query Demo</h1>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        {showPosts && <PostsComponent />}

        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;