"use client";

import React, { useState } from "react";
import { OrbitIcon, Plus, MessageSquare, Box } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ComponentItem {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isDarkIcon?: boolean;
}

export const Card = () => {
  const [isOpen, setIsOpen] = useState(true);

  const items: ComponentItem[] = [
    {
      id: 1,
      title: "Our UI Components",
      subtitle: "A collection of UI components",
      icon: <MessageSquare size={20} />,
    },
    {
      id: 2,
      title: "Some other components",
      subtitle: "Here goes another subtitle",
      icon: <Box size={20} />,
    },
    {
      id: 3,
      title: "Our logo",
      subtitle: "Best in class you know.",
      isDarkIcon: true,
      icon: (
        <span className="text-xl font-black italic tracking-tighter">A</span>
      ),
    },
  ];

  return (
    // Fixed container sizing (using max-w and h-fit or explicit px/rem)
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className={`flex flex-col gap-6 w-[400px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-neutral-100`}
        >
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl text-neutral-800 tracking-tight">
              React UI Components
            </h3>
            <p className="text-sm leading-relaxed text-neutral-500">
              A collection of UI components for your projects, get on with it.
            </p>
          </div>

          {/* Tag Section */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full px-4 py-1 border border-neutral-200 w-fit shadow-sm bg-white mx-auto cursor-pointer"
          >
            <OrbitIcon size={14} className="text-neutral-600" />
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-wider">
              Motion
            </span>
          </div>

          {/* Preview Section - The Inner Card from image_583716.png */}
          <div className="bg-zinc-100 rounded-2xl mt-4 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-neutral-400">
              Hover me please!
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileHover={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                mass: 1,
              }}
              className="bg-neutral-50 rounded-2xl border border-neutral-100"
            >
              <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group last:border-b-0"
                  >
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-lg shadow-sm border border-gray-50 transition-transform group-active:scale-95 group-hover:scale-90 transition-all duration-300 group-hover:translate-x-2 ${
                        item.isDarkIcon
                          ? "bg-black text-white"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col justify-center gap-0.5 group-hover:scale-95 transition-all duration-300 group-hover:translate-x-1">
                      <span className="text-sm font-semibold text-gray-700 leading-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Create Project Button */}
                <motion.button className="w-full flex items-center justify-center gap-2 py-4 hover:bg-gray-50 transition-colors group">
                  <motion.div className="flex items-center justify-center w-7 h-7 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 group-hover:text-gray-600 group-hover:border-gray-300 transition-all group-hover:translate-x-13 group-hover:scale-140 transition-all duration-400">
                    <Plus size={14} />
                  </motion.div>
                  <motion.span className="text-sm font-medium text-gray-400 group-hover:text-gray-600 group-hover:opacity-0 transition-all duration-300">
                    Create Project
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
