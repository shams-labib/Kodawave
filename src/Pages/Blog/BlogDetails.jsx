import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Share2, User } from "lucide-react";
import { BLOG_POSTS } from "../../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();

  // URL theke asha ID-ti find koro (Safe comparison)
  const blog = BLOG_POSTS.find((item) => String(item.id) === String(id));

  // Page-er shuru-te scroll korar jonno
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">
          Blog Not Found!
        </h2>
        <p className="text-slate-500 mb-8">
          The article you're looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 bg-white selection:bg-blue-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-slate-400 font-bold text-sm mb-12 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Journal
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-6">
            <span className="bg-blue-50 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock size={14} /> {blog.readTime}
            </span>
          </div>

          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-black text-slate-900 leading-[1.1] tracking-tighter mb-10">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <User size={20} className="text-slate-400" />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900">
                  {blog.author}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {blog.date}
                </div>
              </div>
            </div>
            <button className="p-3 hover:bg-slate-50 rounded-full transition-all text-slate-400 hover:text-slate-900 active:scale-90">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-[21/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-16 shadow-2xl border-4 md:border-8 border-slate-50">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div
          className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 font-medium leading-relaxed
          prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter
          prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer CTA */}
        <div className="mt-20 p-8 md:p-12 bg-slate-50 rounded-[2.5rem] text-center border border-slate-100">
          <h4 className="text-2xl font-black text-slate-900 mb-4">
            Enjoyed the article?
          </h4>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Share it with your network or follow us for more insights on modern
            web development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg active:scale-95">
              LinkedIn
            </button>
            <button className="bg-white border border-slate-200 px-8 py-4 rounded-full font-bold text-sm hover:border-slate-400 transition-all active:scale-95">
              Twitter (X)
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
