// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// import { FaChartLine } from "react-icons/fa6";

// import { account, trades } from "../data/trades";
// import { getEquityCurve } from "../utils/calculations";

// const EquityCurve = () => {
//   const data = getEquityCurve(account.startingBalance, trades);

//   return (
//     <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
//       <div className="mb-8 flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Equity Curve
//           </h2>

//           <p className="mt-2 text-gray-600 dark:text-slate-400">
//             Track your account balance after each completed trade.
//           </p>
//         </div>

//         <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10">
//           <FaChartLine className="text-2xl text-blue-600 dark:text-blue-400" />
//         </div>
//       </div>

//       <div className="h-96">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={data}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 10,
//               bottom: 10,
//             }}
//           >
//             <CartesianGrid
//               stroke="#CBD5E1"
//               strokeDasharray="4 4"
//               vertical={false}
//             />

//             <XAxis
//               dataKey="trade"
//               tick={{ fill: "#64748B", fontSize: 12 }}
//               axisLine={{ stroke: "#CBD5E1" }}
//               tickLine={{ stroke: "#CBD5E1" }}
//             />

//             <YAxis
//               tick={{ fill: "#64748B", fontSize: 12 }}
//               axisLine={{ stroke: "#CBD5E1" }}
//               tickLine={{ stroke: "#CBD5E1" }}
//               domain={["dataMin - 500", "dataMax + 500"]}
//               tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
//             />

//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#FFFFFF",
//                 border: "1px solid #E2E8F0",
//                 borderRadius: "12px",
//                 color: "#0F172A",
//               }}
//               labelStyle={{
//                 color: "#475569",
//               }}
//               formatter={(value) => [
//                 `$${Number(value).toLocaleString()}`,
//                 "Balance",
//               ]}
//               labelFormatter={(label) => `Trade #${label}`}
//             />

//             <Line
//               type="monotone"
//               dataKey="balance"
//               stroke="#2563EB"
//               strokeWidth={4}
//               dot={{
//                 r: 4,
//                 fill: "#2563EB",
//                 stroke: "#FFFFFF",
//                 strokeWidth: 2,
//               }}
//               activeDot={{
//                 r: 7,
//                 fill: "#60A5FA",
//               }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </section>
//   );
// };

// export default EquityCurve;

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

import { FaChartLine } from "react-icons/fa6";

import { account, trades } from "../data/trades";
import { getEquityCurve } from "../utils/calculations";

const EquityCurve = () => {
  const data = getEquityCurve(account.startingBalance, trades);

  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const colors = {
    primary: "rgb(37, 99, 235)",

    active: "rgb(96, 165, 250)",

    text: isDark ? "rgb(203, 213, 225)" : "rgb(71, 85, 105)",

    grid: isDark ? "rgb(51, 65, 85)" : "rgb(226, 232, 240)",

    tooltipBg: isDark ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",

    tooltipBorder: isDark ? "rgb(51, 65, 85)" : "rgb(226, 232, 240)",

    tooltipText: isDark ? "rgb(248, 250, 252)" : "rgb(15, 23, 42)",

    dotBorder: isDark ? "rgb(2, 6, 23)" : "rgb(255, 255, 255)",
  };

  return (
    <section
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:shadow-xl

        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            Equity Curve
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-gray-600
              dark:text-slate-400
            "
          >
            Track your account balance after every completed trade.
          </p>
        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-100

            dark:bg-blue-500/10
          "
        >
          <FaChartLine
            className="
              text-3xl
              text-blue-600
              dark:text-blue-400
            "
          />
        </div>
      </div>

      <div className="h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 25,
              left: 5,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={colors.primary}
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor={colors.primary}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke={colors.grid}
              strokeDasharray="5 5"
              vertical={false}
            />

            <XAxis
              dataKey="trade"
              tick={{
                fill: colors.text,
                fontSize: 12,
              }}
              axisLine={{
                stroke: colors.grid,
              }}
              tickLine={false}
            />

            <YAxis
              width={75}
              tick={{
                fill: colors.text,
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              domain={["dataMin - 500", "dataMax + 500"]}
              tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
            />

            <Tooltip
              cursor={{
                stroke: colors.primary,
                strokeWidth: 1,
              }}
              contentStyle={{
                backgroundColor: colors.tooltipBg,
                border: `1px solid ${colors.tooltipBorder}`,
                borderRadius: "14px",
                padding: "12px",
                color: colors.tooltipText,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              labelStyle={{
                color: colors.tooltipText,
                fontWeight: 600,
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Balance",
              ]}
              labelFormatter={(label) => `Trade ${label}`}
            />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="none"
              fill="url(#equityGradient)"
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke={colors.primary}
              strokeWidth={4}
              dot={{
                r: 5,
                fill: colors.primary,
                stroke: colors.dotBorder,
                strokeWidth: 3,
              }}
              activeDot={{
                r: 8,
                fill: colors.active,
                stroke: "rgb(255,255,255)",
                strokeWidth: 3,
              }}
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default EquityCurve;
