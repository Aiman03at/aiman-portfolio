import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariant, itemVariant } from "../aimations/variants";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "aimanmushtaq5028@gmail.com",
      link: "mailto:aimanmushtaq5028@gmail.com"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/aiman",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/aiman",
      link: "#"
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact | Aiman's Portfolio</title>
        <meta name="description" content="Get in touch with Aiman for frontend and full-stack opportunities." />
      </Helmet>

      <section className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I'm open to frontend and full-stack opportunities. Let's connect!
            </p>
            <div className="section-divider mx-auto w-24 mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Reach Out
              </h2>
              
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariant}
                  href={method.link}
                  className="group glass rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{method.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              <motion.div
                variants={itemVariant}
                className="pt-8"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                    <motion.a
                      key={social}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full btn-primary"
                >
                  {submitted ? "Message Sent! 🎉" : "Send Message"}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-center font-medium"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
