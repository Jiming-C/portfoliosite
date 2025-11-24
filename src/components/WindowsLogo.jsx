import React from 'react';

const WindowsLogo = ({ className = "w-6 h-6" }) => {
    return (
        <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#C92A2A', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#51CF66', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#2B8A3E', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4DABF7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1971C2', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FFD43B', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F59F00', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            {/* Windows flag - 4 panes */}
            <g transform="translate(2, 2) skewY(-5)">
                {/* Red pane (top-left) */}
                <path d="M 0 0 L 9 0 L 9 9 L 0 9 Z" fill="url(#redGrad)" stroke="#8B0000" strokeWidth="0.3" />

                {/* Green pane (top-right) */}
                <path d="M 10.5 0 L 20 0 L 20 9 L 10.5 9 Z" fill="url(#greenGrad)" stroke="#1B5E20" strokeWidth="0.3" />

                {/* Blue pane (bottom-left) */}
                <path d="M 0 10.5 L 9 10.5 L 9 20 L 0 20 Z" fill="url(#blueGrad)" stroke="#0D47A1" strokeWidth="0.3" />

                {/* Yellow pane (bottom-right) */}
                <path d="M 10.5 10.5 L 20 10.5 L 20 20 L 10.5 20 Z" fill="url(#yellowGrad)" stroke="#E65100" strokeWidth="0.3" />
            </g>
        </svg>
    );
};

export default WindowsLogo;
