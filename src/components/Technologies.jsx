import { motion } from "framer-motion";

// Programming Languages & Scripting
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitSquare, FaLinux } from "react-icons/fa";
import { SiC, SiLua, SiLatex } from "react-icons/si";
import { TbSql, TbAssembly } from "react-icons/tb";

// Web & Cloud Technologies
import { RiReactjsLine } from "react-icons/ri";
import { SiFlask, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

// Tools, IDEs & Data Science
import { SiPycharm, SiEclipseide, SiRstudioide, SiUnrealengine, SiRobloxstudio, SiNumpy, SiPandas } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Section 1: Programming Languages & Scripting
const programmingLanguages = [
  { icon: FaJava, name: "Java", color: "text-red-600", duration: 2.5 },
  { icon: FaPython, name: "Python", color: "text-blue-400", duration: 2.7 },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-300", duration: 2.9 },
  { icon: SiC, name: "C", color: "text-blue-400", duration: 3 },
  { icon: SiLua, name: "Lua", color: "text-blue-600", duration: 3 },
  { icon: TbSql, name: "SQL", color: "text-blue-500", duration: 3 },
  { icon: TbAssembly, name: "Assembly", color: "text-gray-400", duration: 3 },

];

// Section 2: Web & Cloud Technologies
const webAndCloud = [
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
  { icon: SiFlask, name: "Flask", color: "text-gray-300", duration: 2.8 },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500", duration: 2.7 },
  { icon: TbBrandFramerMotion, name: "Framer Motion", color: "text-purple-500", duration: 2.6 },
  { icon: VscAzure, name: "Azure", color: "text-blue-500", duration: 2.5 },
  { icon: FaAws, name: "AWS", color: "text-orange-500", duration: 2.7 },
];

// Section 3: Tools, IDEs & Data Science
const toolsAndData = [
  { icon: VscVscode, name: "VS Code", color: "text-blue-500", duration: 2.5 },
  { icon: SiPycharm, name: "PyCharm", color: "text-green-500", duration: 2.7 },
  { icon: SiEclipseide, name: "Eclipse", color: "text-purple-400", duration: 3 },
  { icon: DiVisualstudio, name: "Visual Studio", color: "text-purple-500", duration: 3 },
  { icon: FaGitSquare, name: "Git", color: "text-orange-600", duration: 2.9 },
  { icon: FaLinux, name: "Linux", color: "text-yellow-500", duration: 3 },
//   { icon: SiNumpy, name: "NumPy", color: "text-blue-500", duration: 3 },
//   { icon: SiPandas, name: "Pandas", color: "text-red-500", duration: 3 },
];

// Helper function to render a row (using format from your second row)
const renderRow = (title, techs) => (
  <div className="relative overflow-visible">
    <motion.h3
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="text-xl mb-5 ml-3 font-medium text-neutral-400"
    >
      {title}
    </motion.h3>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center pb- gap-6 px-6 snap-x snap-mandatory overflow-visible "
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          variants={iconVariants(tech.duration)}
          initial="initial"
          animate="animate"
          className="group relative rounded-xl border-2 border-neutral-800 p-4 flex-shrink-0 snap-center overflow-visible"
        >
          <tech.icon
            className={`text-5xl ${tech.color} transition-transform duration-200 group-hover:scale-110`}
          />
          <span className="absolute top-full left-0 bg-neutral-800 text-sm text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 z-50 whitespace-nowrap animate-tooltip-pulse text-left">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const TechnologiesComponent = () => {
  return (
    <div className="border-b border-neutral-800 pb-12 overflow-visible">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-12 text-center text-3xl"
      >
        Technologies
      </motion.h2>
      <div className="space-y-8">
        {renderRow("Programming Languages", programmingLanguages)}
        {renderRow("Web & Cloud Technologies", webAndCloud)}
        {renderRow("Development Tools", toolsAndData)}
      </div>
    </div>
  );
};

export default TechnologiesComponent;
