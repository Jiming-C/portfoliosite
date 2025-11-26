import React, { useState, useEffect, useRef } from 'react';
import About from "./components/About";
// import Contact from "./components/Contact"; // Removed static contact
import Experience from "./components/Experience";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar"; // Removed as per request
import Projects from "./components/Project";
import Technologies from "./components/Technologies";
import { Analytics } from "@vercel/analytics/react"
import XPWindow from "./components/XPWindow";
import Taskbar from "./components/Taskbar";
import DesktopIcon from "./components/DesktopIcon";
import InternetExplorer from "./components/InternetExplorer";
import BootScreen from "./components/BootScreen";
import MSNChat from "./components/MSNChat";
import blissWallpaper from "./assets/images/bliss.png";
import ieIcon from "./assets/icons/IE.ico";

// Placeholder Icons (SVGs or Divs)
const MyComputerIcon = () => (
  <div className="w-12 h-12 bg-transparent flex flex-col items-center justify-center relative">
    <div className="w-10 h-8 bg-[#EFEFEF] border-2 border-[#999] rounded-sm relative shadow-sm">
      <div className="absolute inset-1 bg-[#288EFF] border border-[#555]"></div>
    </div>
    <div className="w-8 h-2 bg-[#CCC] border border-[#999] mt-[1px] rounded-b-sm"></div>
  </div>
);

const MyDocumentsIcon = () => (
  <div className="w-12 h-12 bg-transparent flex items-center justify-center relative">
    <div className="w-10 h-8 bg-[#FFD966] border border-[#D4A017] rounded-sm shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#FFF2CC] border-b border-[#D4A017]"></div>
      <div className="absolute top-1 left-1 w-8 h-6 bg-white shadow-sm transform rotate-[-5deg]"></div>
    </div>
  </div>
);

const RecycleBinIcon = () => (
  <div className="w-12 h-12 bg-transparent flex items-center justify-center relative">
    <div className="w-8 h-10 border-2 border-[#999] rounded-sm relative flex items-center justify-center bg-white/20">
      <div className="absolute top-0 w-10 h-1 bg-[#999] -mt-1 rounded-t-sm"></div>
      <div className="text-[#288EFF] text-xs font-bold">♻</div>
    </div>
  </div>
);

const IEIcon = () => (
  <div className="w-12 h-12 bg-transparent flex items-center justify-center relative">
    <div className="w-10 h-10 bg-[#288EFF] rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl italic border-2 border-[#7FBA00] shadow-sm">
      e
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(false); // Boot screen disabled for now
  const [windows, setWindows] = useState({
    resume: { isOpen: true, isMinimized: true, isFlashing: true }, // Resume always visible and flashing
    browser: { isOpen: true, isMinimized: false }
  });

  const scrollContainerRef = useRef(null);

  // Swipe Hint Animation (All devices)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      // Delay slightly to ensure render
      const startTimer = setTimeout(() => {
        // Scroll to 25% of the width
        container.scrollTo({
          left: window.innerWidth * 0.25,
          behavior: 'smooth'
        });

        // Snap back after a short delay
        const snapBackTimer = setTimeout(() => {
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }, 800);

        return () => clearTimeout(snapBackTimer);
      }, 1500);

      return () => clearTimeout(startTimer);
    }
  }, []);

  // Resume Auto-Open Logic Removed (It's always "open" in taskbar now)
  useEffect(() => {
    if (!isLoading) {
      // Open Resume immediately after boot
      // setWindows(prev => ({ ...prev, resume: { ...prev.resume, isOpen: true } }));

      // Minimize after 4 seconds
      // const minimizeTimer = setTimeout(() => {
      //   setWindows(prev => ({ ...prev, resume: { ...prev.resume, isMinimized: true } }));
      // }, 4000);
      // This useEffect block was previously for resume auto-open/minimize, now removed.
      // Keeping it empty or removing it entirely depends on other potential uses of isLoading.
      // For now, it's effectively a no-op if isLoading is always false.
    }
  }, [isLoading]);

  const toggleWindow = (id) => {
    if (id === 'resume') {
      // Stop flashing on click
      setWindows(prev => ({ ...prev, resume: { ...prev.resume, isFlashing: false } }));
      window.open("https://docs.google.com/document/d/1H6vTtv7WY1DAjtFAVfABAvw-419NBoEu/preview", "_blank");
      return;
    }
    setWindows(prev => {
      const windowState = prev[id];
      if (!windowState.isOpen) {
        return { ...prev, [id]: { isOpen: true, isMinimized: false } };
      }
      return { ...prev, [id]: { ...windowState, isMinimized: !windowState.isMinimized } };
    });
  };

  const closeWindow = (id) => {
    setWindows(prev => ({ ...prev, [id]: { ...prev[id], isOpen: false } }));
  };

  const openWindow = (id) => {
    if (id === 'resume') {
      window.open("https://docs.google.com/document/d/1H6vTtv7WY1DAjtFAVfABAvw-419NBoEu/preview", "_blank");
      return;
    }
    setWindows(prev => ({ ...prev, [id]: { isOpen: true, isMinimized: false } }));
  };

  const handleScrollBack = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const handleScrollForward = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  // if (isLoading) {
  //   return <BootScreen />;
  // }

  return (
    <div
      className="h-screen w-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${blissWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Icons Removed - Full Screen Experience */}

      {/* Main Window - Internet Explorer (Full Screen) */}
      {windows.browser.isOpen && (
        <XPWindow
          key="full-screen-browser"
          title="Jiming Chen - Portfolio - Internet Explorer"
          icon={ieIcon}
          className=""
          defaultPosition={{ x: 0, y: 0 }}
          defaultSize={{ width: '100%', height: 'calc(100dvh - 30px)' }} // Full width/height minus taskbar
          style={{
            zIndex: 10,
            display: windows.browser.isMinimized ? 'none' : 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'calc(100dvh - 30px)' // Adjust for taskbar height
          }}
          // Remove close/minimize functionality for the main window to keep it "always open"
          onClose={() => { }}
        >
          <InternetExplorer
            contentClassName="absolute inset-0 bg-white flex flex-col"
            onBack={handleScrollBack}
            onForward={handleScrollForward}
          >
            {/* Navbar Removed */}
            <div ref={scrollContainerRef} className="flex-1 flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth">
              <div id="home" className="min-w-full h-full snap-center overflow-y-auto bg-white">
                <Hero />
              </div>
              <div id="about" className="min-w-full h-full snap-center overflow-y-auto bg-white">
                <About />
              </div>
              <div id="technologies" className="min-w-full h-full snap-center overflow-y-auto bg-white">
                <Technologies />
              </div>
              <div id="experience" className="min-w-full h-full snap-center overflow-y-auto bg-white">
                <Experience />
              </div>
              <div id="projects" className="min-w-full h-full snap-center overflow-y-auto bg-white">
                <Projects />
              </div>
            </div>
            <Analytics />
          </InternetExplorer>
        </XPWindow>
      )}

      {/* Resume Window Removed - Now handled as external link in Taskbar */}

      {/* MSN Chat Widget */}
      <MSNChat />

      <Taskbar
        windows={windows}
        onToggleWindow={toggleWindow}
      />
    </div>
  );
};

export default App;