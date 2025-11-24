import React from 'react';

const XPWindow = ({ title, children, className = "", style = {}, onClose, icon, defaultPosition = { x: 0, y: 0 }, defaultSize = { width: 600, height: 400 } }) => {
    const [position, setPosition] = React.useState(defaultPosition);
    const [size, setSize] = React.useState(defaultSize);
    const [isDragging, setIsDragging] = React.useState(false);
    const [isResizing, setIsResizing] = React.useState(false);
    const dragOffset = React.useRef({ x: 0, y: 0 });
    const resizeStart = React.useRef({ x: 0, y: 0, width: 0, height: 0 });

    // Dragging Logic
    const handleMouseDown = (e) => {
        if (e.target.closest('.resize-handle')) return; // Don't drag if clicking resize handle
        setIsDragging(true);
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    // Resizing Logic
    const handleResizeMouseDown = (e, direction) => {
        e.stopPropagation();
        setIsResizing(true);
        resizeStart.current = {
            x: e.clientX,
            y: e.clientY,
            width: size.width,
            height: size.height,
            direction
        };
    };

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragOffset.current.x,
                    y: e.clientY - dragOffset.current.y
                });
            }
            if (isResizing) {
                const deltaX = e.clientX - resizeStart.current.x;
                const deltaY = e.clientY - resizeStart.current.y;
                const { width, height, direction } = resizeStart.current;

                let newWidth = width;
                let newHeight = height;

                if (direction.includes('e')) newWidth = Math.max(200, width + deltaX);
                if (direction.includes('s')) newHeight = Math.max(150, height + deltaY);

                setSize({ width: newWidth, height: newHeight });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setIsResizing(false);
        };

        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isResizing]);

    return (
        <div
            className={`flex flex-col bg-[#ECE9D8] rounded-t-lg border-[3px] border-[#0055EA] xp-window-shadow overflow-hidden absolute ${className}`}
            style={{
                ...style,
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                zIndex: (isDragging || isResizing) ? 50 : style.zIndex || 10
            }}
        >
            {/* Title Bar */}
            <div
                className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] rounded-t flex items-center justify-between px-2 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] cursor-default"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center gap-2 pointer-events-none">
                    {/* Icon */}
                    {icon ? (
                        <img src={icon} alt="" className="w-4 h-4 object-contain" />
                    ) : (
                        <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
                    )}
                    <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>
                        {title}
                    </span>
                </div>

                <div className="flex gap-1 items-center" onMouseDown={(e) => e.stopPropagation()}>
                    {/* Minimize */}
                    <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-end justify-center pb-1 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                        <div className="w-2 h-[2px] bg-white shadow-sm"></div>
                    </button>
                    {/* Maximize */}
                    <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                        <div className="w-[9px] h-[9px] border-[2px] border-white shadow-sm"></div>
                    </button>
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="w-[21px] h-[21px] bg-[#E0422E] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,150,150,0.5)]"
                    >
                        <span className="text-white text-[13px] font-bold leading-none mb-[1px] shadow-sm">×</span>
                    </button>
                </div>
            </div>

            {/* Menu Bar */}
            <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] flex items-center px-1 py-0.5">
                {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((menu) => (
                    <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default text-sm">
                        {menu}
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-1 bg-[#ECE9D8] overflow-hidden relative">
                {/* Iframe Overlay Fix */}
                {(isDragging || isResizing) && <div className="absolute inset-0 z-50 bg-transparent"></div>}

                <div className="h-full bg-white border border-[#828790] shadow-inner overflow-auto">
                    {children}
                </div>
            </div>

            {/* Resize Handles */}
            <div
                className="resize-handle absolute right-0 top-0 bottom-0 w-1 cursor-e-resize z-50"
                onMouseDown={(e) => handleResizeMouseDown(e, 'e')}
            ></div>
            <div
                className="resize-handle absolute left-0 bottom-0 right-0 h-1 cursor-s-resize z-50"
                onMouseDown={(e) => handleResizeMouseDown(e, 's')}
            ></div>
            <div
                className="resize-handle absolute right-0 bottom-0 w-4 h-4 cursor-se-resize z-50"
                onMouseDown={(e) => handleResizeMouseDown(e, 'se')}
            >
                {/* Grip dots visual */}
                <div className="absolute bottom-[2px] right-[2px] w-[2px] h-[2px] bg-[#888]"></div>
                <div className="absolute bottom-[2px] right-[6px] w-[2px] h-[2px] bg-[#888]"></div>
                <div className="absolute bottom-[2px] right-[10px] w-[2px] h-[2px] bg-[#888]"></div>
                <div className="absolute bottom-[6px] right-[2px] w-[2px] h-[2px] bg-[#888]"></div>
                <div className="absolute bottom-[6px] right-[6px] w-[2px] h-[2px] bg-[#888]"></div>
                <div className="absolute bottom-[10px] right-[2px] w-[2px] h-[2px] bg-[#888]"></div>
            </div>
        </div>
    );
};

export default XPWindow;
