import React, { useState, useEffect } from 'react';
import WindowsLogo from './WindowsLogo';
import startIcon from "../assets/icons/icon.svg";
import ieIcon from "../assets/icons/IE.ico";
import msnIcon from "../assets/icons/msn.ico";
import wordIcon from "../assets/images/word.png";

const Taskbar = ({ windows = {}, onToggleWindow }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="fixed bottom-0 left-0 w-full h-[30px] bg-gradient-to-b from-[#245EDC] to-[#0A46DC] flex items-center justify-between z-50 border-t-2 border-[#3E85F5]">
            {/* Start Button */}
            <div className="h-full">
                <button className="h-full px-2 flex items-center gap-1 bg-gradient-to-b from-[#3C8D42] to-[#255F2A] rounded-r-[10px] hover:brightness-110 transition-all shadow-[2px_0_5px_rgba(0,0,0,0.3)] ml-0">
                    <WindowsLogo className="w-5 h-5" />
                    <span className="text-white font-bold italic text-[15px] pr-2 shadow-sm" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
                        start
                    </span>
                </button>
            </div>

            {/* Task Area */}
            <div className="flex-1 flex items-center px-2 gap-1 overflow-hidden">
                {Object.entries(windows).map(([id, state]) => {
                    if (!state.isOpen) return null;
                    return (
                        <button
                            key={id}
                            onClick={() => onToggleWindow(id)}
                            className={`h-[22px] px-2 max-w-[160px] flex-1 flex items-center gap-2 rounded-[2px] text-white text-xs text-left truncate
                                ${state.isFlashing
                                    ? 'xp-flash bg-[#E57A00]'
                                    : state.isMinimized
                                        ? 'bg-[#3C81F3] hover:bg-[#5394F6] shadow-[inset_0_0_1px_rgba(255,255,255,0.5)]'
                                        : 'bg-[#1E52B7] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]'
                                }`}
                        >
                            {/* Icon */}
                            {id === 'resume' ? (
                                <img src={wordIcon} alt="Word" className="w-3 h-3 object-contain" />
                            ) : id === 'browser' ? (
                                <img src={ieIcon} alt="Internet Explorer" className="w-3 h-3 object-contain" />
                            ) : (
                                <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
                            )}
                            <span className="truncate">
                                {id === 'browser' ? 'Jiming Chen - Portfolio' : 'Resume - Word'}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* System Tray */}
            <div className="h-full bg-[#0B96D6] border-l border-[#153488] flex items-center px-3 gap-2 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]">

                <span className="text-white text-xs font-normal font-tahoma">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
};

export default Taskbar;
