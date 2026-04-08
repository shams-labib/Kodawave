import React from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";
import Animation from "../../Components/shared/Animation";

const BLOGS = [
  {
    id: "1",
    title: "The Future of Web Performance in 2026",
    excerpt:
      "Why Core Web Vitals are no longer enough and how to stay ahead with edge computing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    date: "April 05, 2026",
    category: "Development",
  },
  {
    id: "2",
    title: "Mastering SEO for AI Search Engines",
    excerpt:
      "Search is changing. Learn how to optimize your content for LLMs and generative search.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    date: "March 28, 2026",
    category: "Marketing",
  },
];

const BlogListing = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <Animation direction="up">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Our Journal
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Insights on engineering, growth, and the future of digital.
          </p>
        </Animation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOGS.map((post, i) => (
          <Animation key={post.id} direction="up" delay={i * 0.1}>
            <Link to={`/blog/${post.id}`} className="group block">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                <Calendar size={14} /> {post.date}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 font-medium mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider">
                Read Article{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </Link>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
