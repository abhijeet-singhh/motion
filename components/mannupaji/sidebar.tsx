"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  BarChart2,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Analytics", icon: <BarChart2 size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  // Sidebar width animation
  const sidebarVariants = {
    open: {
      width: "16rem",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
      },
    },
  };

  // Parent stagger animation
  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Child animation
  const childVariants = {
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      x: -12,
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.aside
      initial={false}
      animate={isCollapsed ? "closed" : "open"}
      variants={sidebarVariants}
      className="relative h-screen bg-white border-r border-gray-200 p-4 overflow-hidden"
    >
      {/* Header */}
      <div className="relative flex items-center justify-between mt-2">
        <motion.h1
          animate={{
            opacity: isCollapsed ? 0 : 1,
            x: isCollapsed ? -10 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold text-gray-800 tracking-tight whitespace-nowrap"
        >
          Dashboard
        </motion.h1>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-0 top-0 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <motion.nav variants={parentVariants} className="space-y-3 mt-10">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            layout
            variants={childVariants}
            whileHover={{
              scale: 1.03,
              x: 4,
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center rounded-xl px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            {/* Icon */}
            <motion.div
              layout
              animate={{
                marginRight: isCollapsed ? 0 : 12,
              }}
              className="flex-shrink-0"
            >
              {item.icon}
            </motion.div>

            {/* Text */}
            <motion.span
              animate={{
                opacity: isCollapsed ? 0 : 1,
                x: isCollapsed ? -10 : 0,
                width: isCollapsed ? 0 : "auto",
              }}
              transition={{
                duration: 0.2,
              }}
              className="whitespace-nowrap overflow-hidden text-base font-medium"
            >
              {item.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.nav>
    </motion.aside>
  );
};

export default Sidebar;
