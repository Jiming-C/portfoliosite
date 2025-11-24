import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import errorIcon from "../assets/icons/stop.ico"; // Using stop icon as a generic alert icon

const WIPModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="w-[400px] bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg shadow-2xl font-tahoma"
                    >
                        {/* Title Bar */}
                        <div className="bg-gradient-to-r from-[#0058EE] to-[#3593FF] px-2 py-1 flex items-center justify-between select-none">
                            <span className="text-white font-bold text-sm text-shadow-sm">Construction</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-[21px] h-[21px] bg-[#E0422E] hover:bg-[#E86F5E] border border-white/30 rounded-[3px] flex items-center justify-center text-white font-bold text-xs shadow-inner"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex gap-4 items-start">
                            <img src={errorIcon} alt="Alert" className="w-8 h-8" />
                            <div className="flex-1">
                                <p className="text-sm text-black mb-4">
                                    This portfolio is currently under construction. Some features may not work as expected.
                                </p>
                                <p className="text-sm text-black mb-4">
                                    Please proceed with caution!
                                </p>
                            </div>
                        </div>

                        {/* Footer/Buttons */}
                        <div className="p-2 flex justify-center gap-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-1 bg-[#ECE9D8] border border-[#003C74] rounded-[3px] text-black text-sm hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] active:translate-y-[1px] shadow-[1px_1px_2px_rgba(0,0,0,0.3)]"
                            >
                                OK
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WIPModal;
