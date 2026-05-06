import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../aimations/variants";   
import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";      

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === id
  );

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
  );
}
        {project.description}
      </p>
{/*Tech Stack Section*/}


      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech.map((item) => (
        <span
          key={item}
          className="px-3 py-1 text-sm rounded-full 
            bg-gray-200 dark:bg-gray-800"
      >
           {item}
           </span>
      ))}
      </div>
      {/* Case Study Section */}
       {/* Problem and Solution Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-19">
      <motion.div variants={fadeUp}>
      <h2 className="text-2xl font-bold">
       Problem
      </h2>
      <p className="leading-relaxed opacity-90">
      {project.caseStudy.problem}
      </p>
      </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-2">
            Solution
          </h2>
          <p>{project.caseStudy.solution}</p>
        </motion.div>
        </div>





        {/* Challenges */}
{project.caseStudy.challenges && (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-12"
  >
    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
    <ul className="space-y-2 ">
      {project.caseStudy.challenges.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </motion.section>
)}

{/* Trade-offs */}
{project.caseStudy.tradeoffs && (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-10"
  >
    <h3 className="text-xl font-semibold mb-3">Trade-offs</h3>
    <ul className="space-y-2" >
      {project.caseStudy.tradeoffs.map((item, i) => (
        <li key={i}>• {item}</li>
      ))}
    </ul>
  </motion.section>
)}

        {/* Features Section */}
        <motion.div variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold mb-2">
            AI Integration
          </h2>
          <p>{project.caseStudy.ai}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold mb-2">
            Learnings
          </h2>
          <p>{project.caseStudy.learnings}</p>
        </motion.div>
      

{project.improvements && (
        <motion.div variants={sectionVariant}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        className=" mt-10 rounded-xl border border-gray-700/40 bg-zinc-100/50 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">
            Improvements
          </h3>
          <ul className="space-y-3">
            {project.improvements.map((improvement, index) => (
              <motion.li
               key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-2 "
               >
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"/>
                  <p className=" leading-relaxed">{improvement}

                  </p>
                  

               </motion.li>
            ))}
          </ul>
        </motion.div> 
) } 

      {/* Screenshots Section */}
      <div className="rounded-xl overflow-hidden 
hover:scale-[1.03] transition-transform"  >
        <h2 className="text-2xl font-bold mb-4">
         Screenshots
         </h2>

        <div className="grid gap-6 sm:grid-cols-2">
        {project.screenshots.map((img) => (
      <img
        key={img}
        src={img}
        alt="Project screenshot"
        loading="lazy"
        className="rounded-lg shadow"
      />
    ))}
  </div>
</div>


{/* Buttons */}
      <div className="px-6 py-2 rounded-lg bg-indigo-600 
hover:bg-indigo-500 transition-all 
hover:scale-[1.02]">
        <a
          href={project.live}
          target="_blank"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700
          focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-500"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          className="px-6 py-3 rounded-lg border focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-500"
        >
          GitHub
        </a>
      </div>
    
    </motion.section>
    </PageWrapper>
  );
}