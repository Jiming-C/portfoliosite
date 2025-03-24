import logo from "../assets/icon.svg";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 slide-down">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="w-12 h-12" src={logo} alt="logo" />
      </div>

      {/* Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Résumé Icon with Pulse Animation and Tooltip */}
        <div className="relative group">
          <a
            href="https://docs.google.com/document/d/1H6vTtv7WY1DAjtFAVfABAvw-419NBoEu/edit?usp=sharing&ouid=103069800052482120825&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-blue-500 animate-pulse"
          >
            <FaFileAlt />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 opacity-0 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-100">
            Resume
          </div>
        </div>
        
        {/* LinkedIn Icon with Tooltip */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/jimingc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 opacity-0 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-100">
            LinkedIn
          </div>
        </div>

        {/* GitHub Icon with Tooltip */}
        <div className="relative group">
          <a
            href="https://github.com/Jiming-C"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 opacity-0 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-100">
            GitHub
          </div>
        </div>

        {/* Email Me Button with Gradient Background */}
        <a
          href="mailto:jimingchen2015@gmail.com"
          className="rounded animate-gradient bg-gradient-to-r from-purple-950 bg-purple-700 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:opacity-80"
        >
          Email Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
