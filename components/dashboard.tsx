"use client";

import React from "react";
import { motion } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from "lucide-react";

// Mock Data
const data = [
  { name: "Jan", revenue: 4500 },
  { name: "Feb", revenue: 5200 },
  { name: "Mar", revenue: 4800 },
  { name: "Apr", revenue: 6100 },
  { name: "May", revenue: 5900 },
  { name: "Jun", revenue: 7200 },
];

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.25,
    },
  },
};

const fastStaggerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const slowStaggerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: (y: number = 20) => ({
    opacity: 0,
    filter: "blur(4px)",

    y,
  }),

  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      duration: 0.35,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)",
    y: 24,
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      duration: 0.5,
      delay,
    },
  }),
};

const iconVariants = {
  hover: {
    scale: 1.02,
    y: -1,
    // backgroundColor: "rgba(101, 153, 171, 0.3)",

    transition: {
      duration: 0.2,
    },
  },
};

const Dashboard: React.FC = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-slate-50 text-slate-900 p-4 lg:p-8 font-sans overflow-x-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Platform Metrics
          </h2>
          <p className="text-slate-500 mt-1">
            Growth is up{" "}
            <span className="text-emerald-600 font-semibold">+12%</span> this
            month.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
            <Filter size={16} /> Filters
          </button>

          <button className="px-4 py-2 bg-[#6599ab] text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-[#6599ab]/90 transition">
            Export Data
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <motion.div
        variants={fastStaggerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <StatCard
          variants={itemVariants}
          custom={20}
          title="Total Revenue"
          value="$128,430"
          icon={<DollarSign />}
          change="+12.5%"
          isUp
        />
        <StatCard
          variants={itemVariants}
          custom={20}
          title="Active Users"
          value="43,920"
          icon={<Users />}
          change="+8.2%"
          isUp
        />
        <StatCard
          variants={itemVariants}
          custom={20}
          title="New Orders"
          value="1,240"
          icon={<ShoppingCart />}
          change="-2.1%"
        />
        <StatCard
          variants={itemVariants}
          custom={20}
          title="Conversion"
          value="3.42%"
          icon={<TrendingUp />}
          change="+4.3%"
          isUp
        />
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <motion.div
          variants={sectionVariants}
          custom={0.5}
          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-800">Revenue Stream</h3>
            <select className="text-sm bg-slate-50 rounded-lg py-1 px-3 text-slate-600 border border-slate-100">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eef2ff"
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    backgroundColor: "white",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6599ab"
                  strokeWidth={3}
                  fill="url(#chartGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Activity (LIGHT VERSION instead of dark) */}
        <motion.div
          variants={sectionVariants}
          custom={0.75}
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
        >
          <h3 className="text-lg font-bold mb-6 text-slate-800">
            Recent Activity
          </h3>

          <motion.div variants={slowStaggerVariants} className="space-y-6">
            <ActivityItem
              variants={itemVariants}
              custom={10}
              name="Dribbble Pro"
              price="-$120.00"
              type="Design"
              date="2h ago"
            />
            <ActivityItem
              variants={itemVariants}
              custom={10}
              name="Stripe Payout"
              price="+$2,400.00"
              type="Income"
              date="5h ago"
              isPositive
            />
            <ActivityItem
              variants={itemVariants}
              custom={10}
              name="AWS Cloud"
              price="-$340.50"
              type="Server"
              date="Yesterday"
            />
            <ActivityItem
              variants={itemVariants}
              custom={10}
              name="Framer Sub"
              price="-$20.00"
              type="Design"
              date="Oct 12"
            />
          </motion.div>

          <div className="mt-8 p-4 bg-[#6599ab]/20 rounded-2xl border border-indigo-100">
            <p className="text-xs font-bold text-[#6599ab] uppercase tracking-wider mb-2">
              Pro Tip
            </p>
            <p className="text-sm text-slate-600">
              You could save $40/mo by switching AWS to yearly billing.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ---------------- Stat Card ---------------- */
const StatCard = ({ variants, title, value, icon, change, isUp }: any) => (
  <motion.div
    variants={variants}
    whileHover={{
      boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",

      transition: {
        duration: 0.18,
      },
    }}
    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
  >
    <motion.div whileHover="hover">
      <motion.div
        variants={iconVariants}
        className="flex justify-between items-start mb-4"
      >
        <div className="p-3 bg-[#6599ab]/20 text-[#6599ab] rounded-2xl">
          {React.cloneElement(icon, { size: 22 })}
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-bold ${isUp ? "text-emerald-500" : "text-rose-500"}`}
        >
          {change}
          {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        </div>
      </motion.div>

      <p className="text-sm font-semibold text-slate-400">{title}</p>
      <h3 className="text-2xl font-black text-slate-800 mt-1">{value}</h3>
    </motion.div>
  </motion.div>
);

/* ---------------- Activity Item ---------------- */
const ActivityItem = ({
  variants,
  name,
  price,
  type,
  date,
  isPositive,
}: any) => (
  <motion.div
    variants={variants}
    className="flex justify-between items-center group cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 group-hover:bg-indigo-100 transition">
        {name[0]}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-800">{name}</p>
        <p className="text-xs text-slate-500">
          {type} • {date}
        </p>
      </div>
    </div>

    <p
      className={`text-sm font-bold ${isPositive ? "text-emerald-500" : "text-slate-500"}`}
    >
      {price}
    </p>
  </motion.div>
);

export default Dashboard;
