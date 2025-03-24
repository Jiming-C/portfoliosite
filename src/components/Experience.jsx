import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.3 + techIndex * 0.1,
                  }}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
