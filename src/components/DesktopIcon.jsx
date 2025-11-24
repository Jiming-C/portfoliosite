import React from 'react';

const DesktopIcon = ({ icon, iconSrc, label, selected = false, onClick }) => {
    return (
        <div className="flex flex-col items-center gap-1 group cursor-pointer w-[75px] select-none" onClick={onClick}>
            <div className={`w-12 h-12 flex items-center justify-center transition-all ${selected ? 'bg-[#0B61FF] bg-opacity-50 border border-dotted border-[#0B61FF]' : 'group-hover:bg-[#0B61FF] group-hover:bg-opacity-20'}`}>
                {iconSrc ? (
                    <img src={iconSrc} alt={label} className="w-10 h-10 object-contain drop-shadow-md" />
                ) : (
                    icon
                )}
            </div>
            <span
                className={`text-white text-[11px] text-center px-1 py-[1px] rounded-[2px] leading-tight ${selected ? 'bg-[#0B61FF]' : 'group-hover:bg-[#0B61FF] group-hover:bg-opacity-40'
                    }`}
                style={{ textShadow: '1px 1px 1px rgba(0,0,0,1)', fontFamily: 'Tahoma' }}
            >
                {label}
            </span>
        </div>
    );
};

export default DesktopIcon;
