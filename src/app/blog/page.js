import Link from "next/link";
import Nav from "../components/Nav";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          // blog
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">المدونة</h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-line bg-card transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted">{post.category}</span>
                <span className="font-mono text-xs text-muted">{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}