import { motion } from "framer-motion";
import {Link} from "react-router-dom";


type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCards({
  id,
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`}>
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)" }}
      className="rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-300
                 cursor-pointer group card-hover"
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="text-white font-semibold text-center"
          >
            View Project →
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2"
          whileHover={{ color: "#3b82f6" }}
        >
          {title}
        </motion.h3>
        
        <p className="text-sm opacity-75 mb-4 text-gray-700 dark:text-gray-300 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform"
        >
          Learn More →
        </motion.div>
      </div>
    </motion.article>
    </Link>
  );
}