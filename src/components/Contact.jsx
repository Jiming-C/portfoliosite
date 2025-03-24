import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1 }
  },
};

const detailVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, delay: 0.3 }
  },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        variants={detailVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center tracking-tighter"
      >
        <motion.p 
          className="my-4 text-lg"
          whileHover={{ scale: 1.05 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileHover={{ scale: 1.05 }}
          className="border-b inline-block text-lg text-blue-500 hover:text-blue-700"
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
