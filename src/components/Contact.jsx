import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  },
};

const detailVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.3 }
  },
};

const Contact = () => {
  return (
    <div id="contact" className="pb-4 px-4">
      {/* XP Window Style Container */}
      <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>Contact Me</span>
          </div>
          <div className="flex gap-1">
            {/* Minimize */}
            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-end justify-center pb-1 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
              <div className="w-2 h-[2px] bg-white shadow-sm"></div>
            </button>
            {/* Maximize */}
            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
              <div className="w-[9px] h-[9px] border-[2px] border-white shadow-sm"></div>
            </button>
            {/* Close */}
            <button className="w-[21px] h-[21px] bg-[#E0422E] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,150,150,0.5)]">
              <span className="text-white text-[13px] font-bold leading-none mb-[1px] shadow-sm">×</span>
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2">
          {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((menu) => (
            <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default text-sm font-tahoma">
              {menu}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <motion.h2
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-6 text-center text-3xl font-tahoma text-gray-800"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={detailVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center tracking-tighter"
          >
            <div className="pb-4 px-4">
              {/* MSN Messenger Theme */}
              <div className="max-w-md mx-auto mt-8 border-2 border-[#6897BB] rounded-t-lg overflow-hidden shadow-lg bg-[#EBF4FA]">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#B4D3F2] to-[#429CE3] px-3 py-2 flex items-center justify-between border-b border-[#429CE3]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-400 border border-green-600"></div>
                    <span className="text-[#204E80] font-bold font-tahoma text-sm">Jiming Chen - Conversation</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-[#D2E5F4] border border-[#8FB9D9] rounded-sm flex items-center justify-center text-[#204E80] text-xs font-bold cursor-pointer">-</div>
                    <div className="w-4 h-4 bg-[#E0422E] border border-[#B02B1A] rounded-sm flex items-center justify-center text-white text-xs font-bold cursor-pointer">X</div>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="bg-[#EEF3F9] border-b border-[#A0C3E3] p-1 flex gap-2">
                  <div className="px-2 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                    <span className="text-xs text-[#204E80]">Invite</span>
                  </div>
                  <div className="px-2 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                    <span className="text-xs text-[#204E80]">Send Files</span>
                  </div>
                  <div className="px-2 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                    <span className="text-xs text-[#204E80]">Video</span>
                  </div>
                  <div className="px-2 py-0.5 border border-transparent hover:border-[#A0C3E3] hover:bg-[#FFE1AC] rounded-sm cursor-pointer">
                    <span className="text-xs text-[#204E80]">Voice</span>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="p-4 bg-white h-64 border-b border-[#A0C3E3] overflow-y-auto font-tahoma text-sm">
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1">Jiming says:</p>
                    <p className="text-black">Hey there! Thanks for checking out my portfolio.</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1">Jiming says:</p>
                    <p className="text-black">If you want to get in touch, you can reach me here:</p>
                  </div>

                  <motion.div
                    variants={detailVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="ml-4"
                  >
                    <motion.p
                      className="mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-[#204E80] font-bold">📱 Phone: </span>
                      <span className="text-black">{CONTACT.phoneNo}</span>
                    </motion.p>
                    <motion.a
                      href={`mailto:${CONTACT.email}`}
                      whileHover={{ scale: 1.05 }}
                      className="block"
                    >
                      <span className="text-[#204E80] font-bold">📧 Email: </span>
                      <span className="text-blue-600 underline cursor-pointer">{CONTACT.email}</span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Input Area */}
                <div className="p-2 bg-[#EBF4FA]">
                  <div className="bg-white border border-[#8FB9D9] h-16 p-2 text-sm text-gray-400 font-tahoma">
                    Type a message...
                  </div>
                  <div className="flex justify-end mt-2 gap-2">
                    <button className="px-4 py-1 bg-gradient-to-b from-[#F2F8FC] to-[#D2E5F4] border border-[#8FB9D9] rounded-sm text-[#204E80] text-xs font-bold shadow-sm">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
