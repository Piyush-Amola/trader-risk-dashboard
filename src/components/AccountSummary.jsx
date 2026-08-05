// import {
//   FaWallet,
//   FaDollarSign,
//   FaArrowTrendDown,
//   FaTriangleExclamation,
// } from "react-icons/fa6";

// import { account, trades } from "../data/trades";
// import { getCurrentBalance } from "../utils/calculations";

// const AccountSummary = () => {
//   const currentBalance = getCurrentBalance(account.startingBalance, trades);

//   const summary = [
//     {
//       title: "Starting Balance",
//       value: `$${account.startingBalance.toLocaleString()}`,
//       icon: FaWallet,
//       color: "text-blue-600 dark:text-blue-400",
//       bg: "bg-blue-100 dark:bg-blue-500/10",
//     },
//     {
//       title: "Current Balance",
//       value: `$${currentBalance.toLocaleString()}`,
//       icon: FaDollarSign,
//       color: "text-green-600 dark:text-green-400",
//       bg: "bg-green-100 dark:bg-green-500/10",
//     },
//     {
//       title: "Maximum Drawdown",
//       value: `$${account.maxDrawdown.toLocaleString()}`,
//       icon: FaArrowTrendDown,
//       color: "text-red-600 dark:text-red-400",
//       bg: "bg-red-100 dark:bg-red-500/10",
//     },
//     {
//       title: "Daily Loss Limit",
//       value: `$${account.dailyLossLimit.toLocaleString()}`,
//       icon: FaTriangleExclamation,
//       color: "text-orange-600 dark:text-orange-400",
//       bg: "bg-orange-100 dark:bg-orange-500/10",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto py-8">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Account Summary
//         </h2>

//         <p className="mt-2 text-gray-600 dark:text-slate-400">
//           Overview of your trading account performance.
//         </p>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//         {summary.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="rounded-2xl border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900 p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between">
//                 <div
//                   className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg}`}
//                 >
//                   <Icon className={`text-2xl ${item.color}`} />
//                 </div>

//                 <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500">
//                   Summary
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

// export default AccountSummary;

import {
  FaWallet,
  FaDollarSign,
  FaArrowTrendDown,
  FaTriangleExclamation,
} from "react-icons/fa6";

import { account, trades } from "../data/trades";
import { getCurrentBalance } from "../utils/calculations";

const AccountSummary = () => {
  const currentBalance = getCurrentBalance(account.startingBalance, trades);

  const summary = [
    {
      title: "Starting Balance",
      value: account.startingBalance,
      icon: FaWallet,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-500/15",
    },
    {
      title: "Current Balance",
      value: currentBalance,
      icon: FaDollarSign,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100 dark:bg-emerald-500/15",
    },
    {
      title: "Maximum Drawdown",
      value: account.maxDrawdown,
      icon: FaArrowTrendDown,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-500/15",
    },
    {
      title: "Daily Loss Limit",
      value: account.dailyLossLimit,
      icon: FaTriangleExclamation,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-500/15",
    },
  ];

  const formatCurrency = (amount) =>
    `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Account Summary
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-slate-400">
          Monitor your trading account balance, risk limits, and performance.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        xl:grid-cols-4 
        gap-5
      "
      >
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
              "
            >
              {/* Background glow */}
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-gray-100
                  opacity-40
                  blur-2xl
                  transition
                  group-hover:scale-150
                  dark:bg-slate-700
                "
              />

              <div className="relative">
                {/* Icon + Label */}
                <div className="flex items-center justify-between">
                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      ${item.bg}
                    `}
                  >
                    <Icon
                      aria-hidden="true"
                      className={`text-2xl ${item.color}`}
                    />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-gray-500

                      dark:bg-slate-800
                      dark:text-slate-400
                    "
                  >
                    Account
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <p
                    className="
                      text-sm
                      font-medium
                      text-gray-500
                      dark:text-slate-400
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className={`
                      mt-2
                      text-3xl
                      font-bold
                      tracking-tight
                      ${item.color}
                    `}
                  >
                    {formatCurrency(item.value)}
                  </h3>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AccountSummary;
