import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
  
export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    </PageWrapper>
  );

  return (
    <PageWrapper>
    <Helmet>
      <title>{blog.title} | Aiman's Blog</title>
      <meta name="description" content={blog.excerpt} />
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://your-domain.com/blog/${blog.id}`}/>
      <meta property="og:image" content="https://your-domain.com/og-blog-cover.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blog.title} />
      <meta name="twitter:description" content={blog.excerpt} />
    </Helmet>

    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
          {blog.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <time className="text-lg font-medium">{blog.date}</time>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400"></div>
          <span className="text-sm">5 min read</span>
        </div>

        <div className="section-divider" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="prose prose-invert max-w-none
                   prose-headings:text-gray-900 dark:prose-headings:text-white
                   prose-p:text-gray-700 dark:prose-p:text-gray-300
                   prose-a:text-blue-600 dark:prose-a:text-blue-400
                   prose-strong:text-gray-900 dark:prose-strong:text-white
                   prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                   prose-code:text-gray-900 dark:prose-code:text-gray-100
                   prose-blockquote:border-blue-500 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300"
      >
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </motion.div>

      {/* Author Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-12 border-t-2 border-gray-200 dark:border-gray-800"
      >
        <div className="glass rounded-xl p-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Aiman Mushtaq
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Frontend Developer & Tech Writer
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Passionate about building beautiful user interfaces and sharing knowledge with the community. Follow me on social media for more insights.
          </p>
          <div className="flex gap-4">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold"
              >
                {social[0]}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Related Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          More Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.slice(0, 2).map((relatedBlog) => (
            <Link
              key={relatedBlog.id}
              to={`/blog/${relatedBlog.id}`}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 
                           bg-white dark:bg-gray-900 hover:border-blue-500 transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {relatedBlog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {relatedBlog.date}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </article>
    </PageWrapper>
  );
}
