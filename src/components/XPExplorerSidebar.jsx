import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const XPExplorerSidebar = () => {
    return (
        <div className="w-[200px] min-w-[200px] bg-[#7BA2E7] p-3 flex flex-col gap-3 h-full overflow-y-auto border-r border-[#D1D1D1] hidden md:flex">
            <SidebarSection
                title="File and Folder Tasks"
                icon={
                    <div className="w-4 h-4 relative">
                        <div className="absolute inset-0 bg-[#ECE9D8] border border-[#828790] rounded-sm"></div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-blue-500"></div>
                    </div>
                }
                defaultOpen={true}
            >
                <SidebarItem icon="📁" label="Make a new folder" />
                <SidebarItem icon="🌏" label="Publish this folder to the Web" />
                <SidebarItem icon="✉️" label="E-mail this folder's files" />
            </SidebarSection>

            <SidebarSection
                title="Other Places"
                icon={
                    <div className="w-4 h-4 bg-[#ECE9D8] border border-[#828790] rounded-sm flex items-center justify-center text-[10px]">
                        🏠
                    </div>
                }
                defaultOpen={true}
            >
                <SidebarItem icon="💻" label="My Computer" />
                <SidebarItem icon="📄" label="My Documents" />
                <SidebarItem icon="🤝" label="My Network Places" />
            </SidebarSection>

            <SidebarSection
                title="Details"
                icon={
                    <div className="w-4 h-4 bg-[#ECE9D8] border border-[#828790] rounded-sm flex items-center justify-center text-[10px]">
                        ℹ️
                    </div>
                }
                defaultOpen={true}
            >
                <div className="px-3 py-1 text-[11px] text-black font-tahoma">
                    <p className="font-bold">My Projects</p>
                    <p>File Folder</p>
                    <p className="mt-1">Date Modified:</p>
                    <p>Today</p>
                </div>
            </SidebarSection>
        </div>
    );
};

const SidebarSection = ({ title, icon, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="rounded-t-md overflow-hidden shadow-sm">
            {/* Header */}
            <div
                className="bg-gradient-to-r from-[#245EDC] to-[#7BA2E7] px-3 py-1 flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-bold text-[11px] font-tahoma">{title}</span>
                <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
                    <span className="text-white text-[10px] font-bold leading-none">
                        {isOpen ? '▲' : '▼'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#D6DFF7] border-x border-b border-white/50"
                    >
                        <div className="p-2 flex flex-col gap-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SidebarItem = ({ icon, label, onClick }) => {
    return (
        <div
            className="flex items-center gap-2 px-1 py-0.5 hover:underline cursor-pointer group"
            onClick={onClick}
        >
            <span className="text-base">{icon}</span>
            <span className="text-[11px] text-[#204E80] font-tahoma group-hover:text-[#0000FF]">{label}</span>
        </div>
    );
};

export default XPExplorerSidebar;
