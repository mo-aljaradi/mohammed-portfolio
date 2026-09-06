import Nav from "../../components/Nav";
import { getPostBySlug } from "../../../lib/posts";
import ReactMarkdown from "react-markdown";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      <Nav />
      <article className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          {post.category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="font-mono text-xs text-muted mb-10">{post.date}</div>

        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}