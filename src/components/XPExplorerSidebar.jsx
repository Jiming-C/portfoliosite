import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newFolderIcon from "../assets/icons/xp/newfolder.png";
import renameIcon from "../assets/icons/xp/rename.png";
import deleteIcon from "../assets/icons/xp/delete.png";
import desktopIcon from "../assets/icons/xp/desktop.png";
import myDocumentsIcon from "../assets/icons/xp/mydocuments.png";
import myComputerIcon from "../assets/icons/xp/mycomputer.png";
import taskHeaderBg from "../assets/ui/xp/task_header.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const XPExplorerSidebar = () => {
    return (
        <div className="w-[200px] min-w-[200px] bg-[#7BA2E7] p-3 flex flex-col gap-3 h-full overflow-y-auto border-r border-[#D1D1D1] hidden md:flex">
            <SidebarSection title="File and Folder Tasks" defaultOpen={true}>
                <SidebarItem icon={newFolderIcon} label="Make a new folder" />
                <SidebarItem icon={renameIcon} label="Rename this selection" />
                <SidebarItem icon={deleteIcon} label="Delete this selection" />
            </SidebarSection>

            <SidebarSection title="Other Places" defaultOpen={true}>
                <SidebarItem icon={desktopIcon} label="Desktop" />
                <SidebarItem icon={myDocumentsIcon} label="My Documents" />
                <SidebarItem icon={myComputerIcon} label="My Computer" />
            </SidebarSection>

            <SidebarSection title="Details" defaultOpen={true}>
                <div className="px-3 py-2 text-[11px] text-black font-tahoma bg-[#D6DFF7]">
                    <p className="font-bold">Unknown</p>
                    <p>Folder</p>
                    <p className="mt-1">Modified: 11/26/2025</p>
                </div>
            </SidebarSection>
        </div>
    );
};

const SidebarSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="rounded-t-sm overflow-hidden shadow-sm bg-white">
            {/* Header */}
            <div
                className="h-[25px] flex items-center justify-between px-3 cursor-pointer select-none"
                style={{
                    backgroundImage: `url(${taskHeaderBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[#215DC6] font-bold text-[11px] font-tahoma">{title}</span>
                <div className="w-[18px] h-[18px] bg-white/30 rounded-full flex items-center justify-center border border-white/60 hover:bg-white/50">
                    <span className="text-[#215DC6] text-[8px] font-bold">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
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
            <img src={icon} alt="" className="w-4 h-4 object-contain" />
            <span className="text-[11px] text-[#215DC6] font-tahoma group-hover:text-[#0000FF] leading-tight">{label}</span>
        </div>
    );
};

export default XPExplorerSidebar;
