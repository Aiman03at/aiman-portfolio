import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../aimations/variants";
import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>

          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{project.title} | Aiman's Projects</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Back to Projects
        </Link>

        <motion.div variants={itemVariant}>
          <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {project.description}
          </p>

          <div className="section-divider w-24 mb-12" />
        </motion.div>

        <motion.div variants={itemVariant} className="mb-12">
          <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            variants={itemVariant}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>

              <ul className="space-y-3">
                {[
                  "Responsive and modern user interface",
                  "Optimized performance and loading times",
                  "Cross-browser compatibility",
                  "Clean and maintainable code architecture",
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>

              <div className="space-y-2">
                {project.tech.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Project Info
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Status
                  </p>

                  <p className="font-semibold text-green-600 dark:text-green-400">
                    Completed
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Timeline
                  </p>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    3 months
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full text-center block"
              >
                Live Demo
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full text-center block"
              >
                View Code
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariant}
          className="mt-20 pt-12 border-t-2 border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            More Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((relatedProject) => (
              <Link
                key={relatedProject.id}
                to={`/projects/${relatedProject.id}`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all h-80"
                >
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </PageWrapper>
  );
}