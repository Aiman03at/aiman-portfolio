import { blogs } from "../data/blog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { containerVariant, itemVariant } from "../aimations/variants";

export default function Blog() {
  return (
    <PageWrapper>
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
          Blog & Articles 📝
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Thoughts, tutorials, and insights on web development, frontend technologies, and the journey of building digital products.
        </p>
        <div className="section-divider w-24 mt-8" />
      </motion.div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {blogs.map((blog) => (
          <motion.div key={blog.id} variants={itemVariant}>
            <Link
              to={`/blog/${blog.id}`}
              className="group block"
            >
              <motion.div
                whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                className="p-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 
                           bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400
                           transition-all duration-300 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white
                                 group-hover:gradient-text transition-all">
                    {blog.title}
                  </h2>
                  <span className="px-4 py-2 text-sm font-medium rounded-full
                                  bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400
                                  whitespace-nowrap">
                    {blog.date}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <motion.div
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold
                             group-hover:translate-x-2 transition-transform"
                >
                  Read Article →
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {blogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Blog posts coming soon...
          </p>
        </motion.div>
      )}
    </section>
    </PageWrapper>
  );
}