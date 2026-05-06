import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen pt-4"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    </motion.main>
  );
}