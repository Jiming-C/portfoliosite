import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer and Computer Science major at the University of Maryland - College Park, dedicated to creating innovative, robust, and scalable applications that solve real-world problems. With hands-on experience running my own business and managing diverse projects, I blend technical expertise with strong leadership to deliver dynamic, high-performing solutions.`;

export const ABOUT_TEXT = `My journey with technology began as a curious kid who believed cartoon characters lived inside our TV—so curious, I once took it apart. That same curiosity followed me to the U.S., where gaming consoles and PCs sparked a deeper passion for understanding how things work. I taught myself to code by modding games and tinkering with my dad’s poor overworked laptop, turning every obstacle into a learning opportunity. Now studying computer science and business at the University of Maryland, I’ve built enterprise tools, websites, and booking automation for my own automotive detailing startup. What drives me is still that same spark from the TV moment—when code brings ideas to life and technology connects people.`;
export const EXPERIENCES = [
  {
    year: "Dec 2024 – Present",
    role: "Navigation & Object Detection Engineer",
    company: "Maryland Unmanned Aerial System (MUAS)",
    description: `Developed AI-driven obstacle avoidance systems with dynamic path planning in Ardupilot, reducing collision risk by 40%. Implemented real-time object detection using YOLO and TensorFlow/OpenCV, increasing aerial analysis accuracy by 35%. Applied reinforcement learning to optimize flight paths, achieving a 28% reduction in energy consumption and maintaining a 99% mission success rate.`,
    technologies: ["Ardupilot", "YOLO", "TensorFlow", "OpenCV", "Reinforcement Learning"],
  },
  {
    year: "Oct 2023 – May 2024",
    role: "Software Development Intern",
    company: "Johns Hopkins University Applied Physics Laboratory",
    description: `Engineered a C# plugin to automate workflows, increasing process efficiency by 80% while significantly reducing manual effort. Developed automation systems for enterprise software updates, diagnostics, and license management, saving over 5 hours weekly. Created detailed 3D CAD models for a Cybertruck suspension system and exoskeleton prototype using Creo Parametric.`,
    technologies: ["C#", "CAD", "Creo Parametric"],
  },
  {
    year: "Apr 2023 – Present",
    role: "Founder",
    company: "NIO Detailing",
    description: `Built and maintained a company website with automated scheduling and API integration, reducing manual booking time by 70%. Launched successful Google Ads campaigns generating over 19,000 interactions and 400+ conversions, increasing bookings by 42%. Implemented SEO strategies that boosted organic traffic by 32% within two weeks.`,
    technologies: ["HTML", "CSS", "API Integration", "SEO", "Google Ads"],
  },
];

export const PROJECTS = [
  {
    title: "AI Vehicle Electronic Control Unit (W.I.P)",
    image: project1,
    description: `Developing an ECU simulator for vehicle diagnostics that integrates Google Gemini AI models for fault prediction, featuring a real-time Flask dashboard for visualizing AI-driven insights and predictive maintenance alerts. The system includes simulated multi-threaded vehicle control in C to replicate CAN bus communication.`,
    technologies: ["C", "Python", "TensorFlow", "Flask"],
  },
  {
    title: "Online Order Processing System",
    image: project2,
    description: `Designed and optimized a multithreaded Java application capable of processing over 10 million orders, achieving a 40% increase in processing speed through advanced algorithms including merge sort, quicksort, and binary search. Developed a scalable architecture for real-time client reports and sales analytics.`,
    technologies: ["Java", "Multithreading", "Sorting Algorithms"],
  },
  {
    title: "BlackJack Game",
    image: project3,
    description: `Created a Java-based Blackjack game with AI players employing dynamic strategies, simulating over 10 million games to test hybrid card counting systems that reduced the house edge to 2.5%. Achieved a 52% player win rate through sophisticated deck simulation techniques.`,
    technologies: ["Java", "AI", "Game Development"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description: `Designed and developed a modern, responsive portfolio website using React and Tailwind CSS, featuring smooth animations with Framer Motion. Implemented dynamic project showcases, interactive elements, and a clean user interface to effectively display technical skills and professional experience. Optimized performance through code splitting and lazy loading while maintaining SEO best practices.`,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
  },
];

export const CONTACT = {
  address: "Ellicott City, Maryland",
  phoneNo: "+1 202-683-0789",
  email: "jimingchen2015@gmail.com",
  linkedin: "https://linkedin.com/in/jimingc",
};
