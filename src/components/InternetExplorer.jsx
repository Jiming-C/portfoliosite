import React from 'react';
import bckIcon from '../assets/bck.ico';
import fwdIcon from '../assets/fwd.ico';
import refreshIcon from '../assets/refresh.ico';
import stopIcon from '../assets/stop.ico';
import homeIcon from '../assets/home.ico';
import fileIcon from '../assets/file.ico';
import usersIcon from '../assets/users.ico';
import ieIcon from '../assets/IE.ico';

const InternetExplorer = ({ children }) => {
    return (
        <div className="flex flex-col h-full bg-[#ECE9D8]">
            {/* Standard Buttons Toolbar */}
            <div className="flex items-center px-1 py-1 gap-0 border-b border-[#D1D1D1] bg-[#ECE9D8] shadow-[inset_0_-1px_0_rgba(255,255,255,0.5)]">
                <div className="flex items-center gap-0">
                    <ToolbarButton icon={bckIcon} label="Back" showText={true} arrow={true} />
                    <ToolbarButton icon={fwdIcon} label="Forward" showText={false} arrow={true} />
                    <ToolbarButton icon={stopIcon} label="Stop" showText={false} />
                    <ToolbarButton icon={refreshIcon} label="Refresh" showText={false} />
                    <ToolbarButton icon={homeIcon} label="Home" showText={false} />
                </div>

                <div className="w-[1px] h-10 bg-[#D1D1D1] mx-1 shadow-[1px_0_0_white]"></div>

                <div className="flex items-center gap-0">
                    <ToolbarButton
                        icon={fileIcon} // Using file icon for Resume (Search replacement)
                        label="Resume"
                        showText={true}
                        onClick={() => window.open("https://docs.google.com/document/d/1H6vTtv7WY1DAjtFAVfABAvw-419NBoEu/preview", "_blank")}
                    />
                    <ToolbarButton
                        icon={usersIcon} // Using users icon for LinkedIn (Favorites replacement)
                        label="LinkedIn"
                        showText={true}
                        onClick={() => window.open("https://linkedin.com/in/jimingc", "_blank")}
                    />
                    <ToolbarButton
                        icon={ieIcon} // Using IE icon for GitHub (History replacement)
                        label="GitHub"
                        showText={true}
                        onClick={() => window.open("https://github.com/jimingc", "_blank")}
                    />
                    <ToolbarButton
                        icon={usersIcon} // Reusing users icon for Email
                        label="Email"
                        showText={true}
                        onClick={() => window.location.href = "mailto:jimingchen2015@gmail.com"}
                    />
                </div>
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-2 py-1 border-b border-[#D1D1D1] bg-[#ECE9D8] shadow-[inset_0_1px_0_white]">
                <span className="text-[#444] text-xs font-normal select-none">Address</span>
                <div className="flex-1 bg-white border border-[#7F9DB9] h-[22px] flex items-center px-1 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">
                    <div className="w-4 h-4 mr-1 flex items-center justify-center">
                        <img src={ieIcon} alt="IE" className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-tahoma w-full outline-none">http://www.jimingchen.dev/portfolio</span>
                    <div className="ml-auto text-gray-400 text-xs">▼</div>
                </div>
                <button className="flex items-center gap-1 px-2 h-[22px] bg-[#ECE9D8] hover:bg-[#E3E3E3] border border-white/50 rounded-sm active:border-[#888] active:shadow-inner">
                    <div className="w-4 h-4 bg-[#008000] rounded-full flex items-center justify-center text-white text-[10px] font-bold">→</div>
                    <span className="text-xs text-black">Go</span>
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative border-t border-[#828790]">
                <div className="absolute inset-0 bg-white overflow-auto">
                    {children}
                </div>
            </div>

            {/* Status Bar */}
            <div className="h-5 bg-[#ECE9D8] border-t border-[#D1D1D1] flex items-center px-2 gap-2 text-xs text-[#444] shadow-[inset_0_1px_0_white]">
                <div className="w-4 h-4 bg-[#ECE9D8] flex items-center justify-center">
                    <img src={ieIcon} alt="IE" className="w-3 h-3" />
                </div>
                <span>Done</span>
                <div className="ml-auto flex items-center gap-4">
                    <span className="border-l border-[#D1D1D1] pl-2">Internet</span>
                </div>
            </div>
        </div>
    );
};

const ToolbarButton = ({ icon, label, showText, arrow, onClick }) => {
    return (
        <div
            className="flex items-center px-1 py-1 hover:bg-[#DDECFE] hover:border hover:border-[#CEE7FF] border border-transparent rounded-[2px] cursor-default group active:bg-[#C2D5F2] active:border-[#98B8E8] h-[38px]"
            onClick={onClick}
        >
            <div className="flex items-center justify-center">
                <img src={icon} alt={label} className="w-8 h-8 object-contain drop-shadow-sm" />
            </div>
            {showText && (
                <span className="text-[11px] text-black ml-1 leading-none select-none">{label}</span>
            )}
            {arrow && (
                <span className="text-[8px] text-black ml-1 leading-none">▼</span>
            )}
        </div>
    );
};

export default InternetExplorer;
