import React from 'react';

const Navbar = () => {
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Technologies", id: "technologies" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    // { name: "Contact", id: "contact" }, // Contact is now in the toolbar
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-2 bg-[#ECE9D8] px-2 py-1 border-b border-[#D1D1D1] shadow-[inset_0_1px_0_white]">
      <span className="text-[#444] text-xs font-normal select-none">Links</span>
      <div className="w-[1px] h-4 bg-[#D1D1D1] shadow-[1px_0_0_white]"></div>

      <div className="flex items-center gap-1">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="flex items-center gap-1 px-2 py-0.5 hover:bg-[#316AC5] hover:text-white group cursor-pointer border border-transparent hover:border-[#316AC5] rounded-sm transition-colors"
          >
            <div className="w-3 h-3 bg-[#FFC20E] border border-[#D4A017] rounded-sm shadow-sm group-hover:border-white/50"></div>
            <span className="text-xs font-tahoma text-black group-hover:text-white">{link.name}</span>
          </button>
        ))}
      </div>

      <div className="ml-auto text-[#444] text-[10px] font-tahoma">
        &gt;&gt;
      </div>
    </div>
  );
};

export default Navbar;
