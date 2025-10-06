import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  return <h3>Blog Post ID: {postId}</h3>;
}