import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from "../constants";
import profilePic from "../assets/images/profilepic.png";
import msnIcon from "../assets/icons/msn.ico";
import msnSound from "../assets/audio/msn.mp3";

const MSNChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Auto-open chat window after 8 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-20 right-7 z-30 flex flex-col items-end gap-2">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        className="w-[90vw] sm:w-96 border-2 border-[#6897BB] rounded-t-lg overflow-hidden shadow-2xl bg-[#EBF4FA]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#B4D3F2] to-[#429CE3] px-2 py-1 flex items-center justify-between border-b border-[#429CE3] cursor-pointer" onClick={() => setIsOpen(false)}>
                            <div className="flex items-center gap-2">
                                <img src={profilePic} alt="Jiming" className="w-4 h-4 rounded-sm border border-white/50 object-cover" />
                                <span className="text-[#204E80] font-bold font-tahoma text-xs">Jiming Chen - Conversation</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-[#E0422E] border border-[#B02B1A] rounded-sm flex items-center justify-center text-white text-xs font-bold cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>X</div>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="bg-[#EEF3F9] border-b border-[#A0C3E3] p-1 flex gap-2">
                            <div className="px-1 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                                <span className="text-[10px] text-[#204E80]">Invite</span>
                            </div>
                            <div className="px-1 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                                <span className="text-[10px] text-[#204E80]">Send Files</span>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="p-3 bg-white h-64 border-b border-[#A0C3E3] overflow-y-auto font-tahoma text-sm">
                            <div className="mb-3">
                                <p className="text-gray-500 text-xs mb-0.5">Jiming says:</p>
                                <p className="text-black">Hey there! Thanks for checking out my portfolio.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-gray-500 text-xs mb-0.5">Jiming says:</p>
                                <p className="text-black">If you want to get in touch, you can reach me here:</p>
                            </div>

                            <div className="ml-2 mt-4 p-2 bg-[#F0F0F0] rounded-sm border border-[#D1D1D1]">
                                <p className="mb-1 text-xs">
                                    <span className="text-[#204E80] font-bold">📱 Phone: </span>
                                    <span className="text-black">{CONTACT.phoneNo}</span>
                                </p>
                                <a href={`mailto:${CONTACT.email} `} className="block text-xs">
                                    <span className="text-[#204E80] font-bold">📧 Email: </span>
                                    <span className="text-blue-600 underline cursor-pointer">{CONTACT.email}</span>
                                </a>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-2 bg-[#EBF4FA]">
                            <div className="bg-white border border-[#8FB9D9] h-12 p-1 text-xs text-gray-400 font-tahoma">
                                Type a message...
                            </div>
                            <div className="flex justify-end mt-1 gap-1">
                                <button className="px-3 py-0.5 bg-gradient-to-b from-[#F2F8FC] to-[#D2E5F4] border border-[#8FB9D9] rounded-sm text-[#204E80] text-xs font-bold shadow-sm" onClick={() => setIsOpen(false)}>Send</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button - Windows XP Style */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 bg-gradient-to-b from-[#ECE9D8] to-[#D6D3CE] border-2 border-white border-r-[#808080] border-b-[#808080] shadow-md hover:brightness-105 active:border-[#808080] active:border-r-white active:border-b-white flex items-center gap-2 rounded-sm"
            >
                <img src={msnIcon} alt="MSN Messenger" className="w-5 h-5 object-contain" />
                <span className="font-tahoma text-xs text-black whitespace-nowrap">MSN Messenger</span>
            </motion.button>
        </div>
    );
};

export default MSNChat;
