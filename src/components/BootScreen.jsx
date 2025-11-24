import React from 'react';


const BootScreen = () => {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-tahoma text-white select-none cursor-wait">
            <div className="flex flex-col items-center gap-8 mb-20">
                {/* XP Logo Area */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative">
                        {/* Simple CSS Windows Logo */}
                        <div className="absolute top-0 left-0 w-7 h-7 bg-[#F25022] rounded-sm"></div>
                        <div className="absolute top-0 right-0 w-7 h-7 bg-[#7FBA00] rounded-sm"></div>
                        <div className="absolute bottom-0 left-0 w-7 h-7 bg-[#00A4EF] rounded-sm"></div>
                        <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#FFB900] rounded-sm"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold tracking-tighter">Microsoft</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-bold tracking-tighter">Windows</span>
                            <span className="text-4xl font-bold text-orange-500 -mt-2">xp</span>
                        </div>
                    </div>
                </div>

                {/* Loading Bar */}
                <div className="w-64 h-4 border border-[#555] rounded-[3px] p-[2px] relative overflow-hidden bg-black mt-12">
                    <div className="w-full h-full relative">
                        <div className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#288EFF] to-transparent animate-boot-load"></div>
                        <div className="absolute top-0 bottom-0 left-0 right-0 flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-3 h-full bg-blue-600 opacity-0"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 right-8 text-xs text-[#888]">
                Copyright © Microsoft Corporation
            </div>
        </div>
    );
};

export default BootScreen;
