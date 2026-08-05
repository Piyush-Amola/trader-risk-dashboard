// import {
//   FaChartLine,
//   FaTrophy,
//   FaArrowTrendDown,
//   FaBullseye,
//   FaMoneyBillTrendUp,
//   FaTriangleExclamation,
// } from "react-icons/fa6";

// import { trades } from "../data/trades";

// import {
//   getTotalPnL,
//   getWinningTrades,
//   getLosingTrades,
//   getWinRate,
//   getLargestWin,
//   getLargestLoss,
// } from "../utils/calculations";

// const TradingStatistics = () => {
//   const totalPnL = getTotalPnL(trades);
//   const winningTrades = getWinningTrades(trades);
//   const losingTrades = getLosingTrades(trades);
//   const winRate = getWinRate(trades);
//   const largestWin = getLargestWin(trades);
//   const largestLoss = getLargestLoss(trades);

//   const stats = [
//     {
//       title: "Total P&L",
//       value: `$${totalPnL.toLocaleString()}`,
//       color:
//         totalPnL >= 0
//           ? "text-green-600 dark:text-green-400"
//           : "text-red-600 dark:text-red-400",
//       bg:
//         totalPnL >= 0
//           ? "bg-green-100 dark:bg-green-500/10"
//           : "bg-red-100 dark:bg-red-500/10",
//       icon: FaChartLine,
//     },
//     {
//       title: "Winning Trades",
//       value: winningTrades,
//       color: "text-blue-600 dark:text-blue-400",
//       bg: "bg-blue-100 dark:bg-blue-500/10",
//       icon: FaTrophy,
//     },
//     {
//       title: "Losing Trades",
//       value: losingTrades,
//       color: "text-red-600 dark:text-red-400",
//       bg: "bg-red-100 dark:bg-red-500/10",
//       icon: FaArrowTrendDown,
//     },
//     {
//       title: "Win Rate",
//       value: `${winRate}%`,
//       color: "text-purple-600 dark:text-purple-400",
//       bg: "bg-purple-100 dark:bg-purple-500/10",
//       icon: FaBullseye,
//     },
//     {
//       title: "Largest Win",
//       value: `+$${largestWin.toLocaleString()}`,
//       color: "text-emerald-600 dark:text-emerald-400",
//       bg: "bg-emerald-100 dark:bg-emerald-500/10",
//       icon: FaMoneyBillTrendUp,
//     },
//     {
//       title: "Largest Loss",
//       value: `-$${Math.abs(largestLoss).toLocaleString()}`,
//       color: "text-orange-600 dark:text-orange-400",
//       bg: "bg-orange-100 dark:bg-orange-500/10",
//       icon: FaTriangleExclamation,
//     },
//   ];

//   return (
//     <section className="mt-10">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Trading Statistics
//         </h2>

//         <p className="mt-2 text-gray-600 dark:text-slate-400">
//           Key performance metrics from your trading activity.
//         </p>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;

//           return (
//             <div
//               key={index}
//               className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
//             >
//               <div className="flex items-center justify-between">
//                 <div
//                   className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.bg}`}
//                 >
//                   <Icon className={`text-2xl ${stat.color}`} />
//                 </div>

//                 <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500">
//                   Statistics
//                 </span>
//               </div>

//               <h3 className="mt-6 text-sm text-gray-500 dark:text-slate-400">
//                 {stat.title}
//               </h3>

//               <p className={`mt-2 text-3xl font-bold ${stat.color}`}>
//                 {stat.value}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default TradingStatistics;

import {
  FaChartLine,
  FaTrophy,
  FaArrowTrendDown,
  FaBullseye,
  FaMoneyBillTrendUp,
  FaTriangleExclamation,
} from "react-icons/fa6";

import { trades } from "../data/trades";

import {
  getTotalPnL,
  getWinningTrades,
  getLosingTrades,
  getWinRate,
  getLargestWin,
  getLargestLoss,
} from "../utils/calculations";

const TradingStatistics = () => {
  const totalPnL = getTotalPnL(trades);
  const winningTrades = getWinningTrades(trades);
  const losingTrades = getLosingTrades(trades);
  const winRate = getWinRate(trades);
  const largestWin = getLargestWin(trades);
  const largestLoss = getLargestLoss(trades);

  const stats = [
    {
      title: "Total P&L",
      value: `${totalPnL >= 0 ? "+" : "-"}$${Math.abs(totalPnL).toLocaleString()}`,
      icon: FaChartLine,
      color:
        totalPnL >= 0
          ? "text-emerald-600 dark:text-emerald-400"
          : "text-red-600 dark:text-red-400",
      iconBg:
        totalPnL >= 0
          ? "bg-emerald-100 dark:bg-emerald-500/15"
          : "bg-red-100 dark:bg-red-500/15",
    },
    {
      title: "Winning Trades",
      value: winningTrades,
      icon: FaTrophy,
      color: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-500/15",
    },
    {
      title: "Losing Trades",
      value: losingTrades,
      icon: FaArrowTrendDown,
      color: "text-red-600 dark:text-red-400",
      iconBg: "bg-red-100 dark:bg-red-500/15",
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
      icon: FaBullseye,
      color: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-500/15",
    },
    {
      title: "Largest Win",
      value: `+$${largestWin.toLocaleString()}`,
      icon: FaMoneyBillTrendUp,
      color: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    },
    {
      title: "Largest Loss",
      value: `-$${Math.abs(largestLoss).toLocaleString()}`,
      icon: FaTriangleExclamation,
      color: "text-orange-600 dark:text-orange-400",
      iconBg: "bg-orange-100 dark:bg-orange-500/15",
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Trading Statistics
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
          Track your trading performance and analyze key account metrics.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
                >
                  <Icon className={`text-2xl ${stat.color}`} />
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                  Metric
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  {stat.title}
                </h3>

                <p
                  className={`mt-2 text-3xl font-bold tracking-tight ${stat.color}`}
                >
                  {stat.value}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TradingStatistics;
