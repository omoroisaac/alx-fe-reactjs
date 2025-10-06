import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // matches /blog/:id
  return <h3>Blog Post ID: {id}</h3>;
}