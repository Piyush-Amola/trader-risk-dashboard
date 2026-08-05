// import {
//   FaShieldHalved,
//   FaArrowTrendDown,
//   FaChartLine,
//   FaTriangleExclamation,
//   FaGaugeHigh,
// } from "react-icons/fa6";

// import { account, trades } from "../data/trades";
// import StatusBadge from "./StatusBadge";

// import {
//   getCurrentBalance,
//   getCurrentDrawdown,
//   getRemainingDrawdown,
//   getCurrentDayLoss,
//   getRemainingDailyLossLimit,
//   getRiskStatus,
// } from "../utils/calculations";

// const RiskIndicator = () => {
//   const currentBalance = getCurrentBalance(account.startingBalance, trades);

//   const currentDrawdown = getCurrentDrawdown(
//     account.startingBalance,
//     currentBalance,
//   );

//   const remainingDrawdown = getRemainingDrawdown(
//     account.maxDrawdown,
//     currentDrawdown,
//   );

//   const currentDayLoss = getCurrentDayLoss(trades);

//   const remainingDailyLoss = getRemainingDailyLossLimit(
//     account.dailyLossLimit,
//     currentDayLoss,
//   );

//   const status = getRiskStatus(remainingDrawdown, remainingDailyLoss);

//   const stats = [
//     {
//       title: "Current Drawdown",
//       value: `$${currentDrawdown.toLocaleString()}`,
//       color: "text-red-600 dark:text-red-400",
//       bg: "bg-red-100 dark:bg-red-500/10",
//       icon: FaArrowTrendDown,
//     },
//     {
//       title: "Remaining Drawdown",
//       value: `$${remainingDrawdown.toLocaleString()}`,
//       color: "text-green-600 dark:text-green-400",
//       bg: "bg-green-100 dark:bg-green-500/10",
//       icon: FaChartLine,
//     },
//     {
//       title: "Current Day Loss",
//       value: `$${currentDayLoss.toLocaleString()}`,
//       color: "text-orange-600 dark:text-orange-400",
//       bg: "bg-orange-100 dark:bg-orange-500/10",
//       icon: FaTriangleExclamation,
//     },
//     {
//       title: "Remaining Daily Loss",
//       value: `$${remainingDailyLoss.toLocaleString()}`,
//       color: "text-blue-600 dark:text-blue-400",
//       bg: "bg-blue-100 dark:bg-blue-500/10",
//       icon: FaGaugeHigh,
//     },
//   ];

//   return (
//     <section className="mt-10">
//       <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Risk Indicator
//           </h2>

//           <p className="mt-2 text-gray-600 dark:text-slate-400">
//             Monitor your account's drawdown and daily loss limits.
//           </p>
//         </div>

//         <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-md dark:border-slate-700 dark:bg-slate-900">
//           <FaShieldHalved className="text-xl text-blue-600 dark:text-blue-400" />
//           <StatusBadge status={status} />
//         </div>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//         {stats.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
//             >
//               <div className="flex items-center justify-between">
//                 <div
//                   className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
//                 >
//                   <Icon className={`text-2xl ${item.color}`} />
//                 </div>

//                 <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500">
//                   Risk
//                 </span>
//               </div>

//               <h3 className="mt-6 text-sm text-gray-500 dark:text-slate-400">
//                 {item.title}
//               </h3>

//               <p className={`mt-2 text-3xl font-bold ${item.color}`}>
//                 {item.value}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default RiskIndicator;

import {
  FaShieldHalved,
  FaArrowTrendDown,
  FaChartLine,
  FaTriangleExclamation,
  FaGaugeHigh,
} from "react-icons/fa6";

import { account, trades } from "../data/trades";
import StatusBadge from "./StatusBadge";

import {
  getCurrentBalance,
  getCurrentDrawdown,
  getRemainingDrawdown,
  getCurrentDayLoss,
  getRemainingDailyLossLimit,
  getRiskStatus,
} from "../utils/calculations";

const RiskIndicator = () => {
  const currentBalance = getCurrentBalance(account.startingBalance, trades);

  const currentDrawdown = getCurrentDrawdown(
    account.startingBalance,
    currentBalance,
  );

  const remainingDrawdown = getRemainingDrawdown(
    account.maxDrawdown,
    currentDrawdown,
  );

  const currentDayLoss = getCurrentDayLoss(trades);

  const remainingDailyLoss = getRemainingDailyLossLimit(
    account.dailyLossLimit,
    currentDayLoss,
  );

  const status = getRiskStatus(remainingDrawdown, remainingDailyLoss);

  const stats = [
    {
      title: "Current Drawdown",
      value: currentDrawdown,
      icon: FaArrowTrendDown,
      color: "text-red-600 dark:text-red-400",
      iconBg: "bg-red-100 dark:bg-red-500/15",
    },
    {
      title: "Remaining Drawdown",
      value: remainingDrawdown,
      icon: FaChartLine,
      color: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    },
    {
      title: "Current Day Loss",
      value: currentDayLoss,
      icon: FaTriangleExclamation,
      color: "text-orange-600 dark:text-orange-400",
      iconBg: "bg-orange-100 dark:bg-orange-500/15",
    },
    {
      title: "Remaining Daily Loss",
      value: remainingDailyLoss,
      icon: FaGaugeHigh,
      color: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-500/15",
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Risk Indicator
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
            Monitor account drawdown, daily losses, and risk exposure.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20">
            <FaShieldHalved className="text-xl text-blue-600 dark:text-blue-400" />
          </div>

          <StatusBadge status={status} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg}`}
                >
                  <Icon className={`text-2xl ${item.color}`} />
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                  Risk
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  {item.title}
                </p>

                <p
                  className={`mt-2 text-3xl font-bold tracking-tight ${item.color}`}
                >
                  ${item.value.toLocaleString()}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RiskIndicator;
