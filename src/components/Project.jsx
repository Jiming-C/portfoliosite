import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <motion.img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              />
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
            >
              <motion.h6
                className="mb-2 font-semibold"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              >
                {project.title}
              </motion.h6>
              <motion.p
                className="mb-4 text-neutral-400"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
              >
                {project.description}
              </motion.p>
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.3 + techIndex * 0.1,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;