// import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
// import { trades } from "../data/trades";

// const TradesTable = () => {
//   return (
//     <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           Trade History
//         </h2>

//         <p className="mt-2 text-gray-600 dark:text-slate-400">
//           Review your latest executed trades and their performance.
//         </p>
//       </div>

//       <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-700">
//         <table className="min-w-[750px] w-full">
//           <thead className="bg-gray-100 dark:bg-slate-800">
//             <tr className="text-gray-700 dark:text-slate-300">
//               <th className="px-6 py-4 text-left font-semibold">#</th>
//               <th className="px-6 py-4 text-left font-semibold">Asset</th>
//               <th className="px-6 py-4 text-left font-semibold">Direction</th>
//               <th className="px-6 py-4 text-right font-semibold">P&amp;L</th>
//               <th className="px-6 py-4 text-center font-semibold">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {trades.map((trade) => {
//               const pnl = trade.pnl ?? trade.profitLoss ?? 0;
//               const isProfit = pnl >= 0;

//               return (
//                 <tr
//                   key={trade.id}
//                   className="border-t border-gray-200 transition-colors hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800/60"
//                 >
//                   <td className="px-6 py-5 font-medium text-gray-700 dark:text-slate-300">
//                     #{trade.id}
//                   </td>

//                   <td className="px-6 py-5">
//                     <span className="font-semibold text-gray-900 dark:text-white">
//                       {trade.asset}
//                     </span>
//                   </td>

//                   <td className="px-6 py-5">
//                     <span
//                       className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
//                         trade.direction === "Buy" || trade.direction === "Long"
//                           ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
//                           : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
//                       }`}
//                     >
//                       {trade.direction === "Buy" ||
//                       trade.direction === "Long" ? (
//                         <FaArrowTrendUp size={12} />
//                       ) : (
//                         <FaArrowTrendDown size={12} />
//                       )}
//                       {trade.direction}
//                     </span>
//                   </td>

//                   <td
//                     className={`px-6 py-5 text-right text-lg font-bold ${
//                       isProfit
//                         ? "text-green-600 dark:text-green-400"
//                         : "text-red-600 dark:text-red-400"
//                     }`}
//                   >
//                     {isProfit ? "+" : "-"}${Math.abs(pnl).toLocaleString()}
//                   </td>

//                   <td className="px-6 py-5 text-center">
//                     <span
//                       className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
//                         isProfit
//                           ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
//                           : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
//                       }`}
//                     >
//                       {isProfit ? "Profit" : "Loss"}
//                     </span>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         {trades.length === 0 && (
//           <div className="py-12 text-center text-gray-500 dark:text-slate-400">
//             No trades available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TradesTable;

import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { trades } from "../data/trades";

const TradesTable = () => {
  const getDirectionStyle = (direction) => {
    const isLong = direction === "Buy" || direction === "Long";

    return {
      isLong,
      className: isLong
        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
        : "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
    };
  };

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Trade History
        </h2>

        <p className="text-sm text-gray-600 dark:text-slate-400">
          Review your executed trades and analyze your trading performance.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full">
            <thead>
              <tr className="bg-gray-50 text-sm text-gray-600 dark:bg-slate-800 dark:text-slate-300">
                <th className="px-6 py-4 text-left font-semibold">S.No.</th>

                <th className="px-6 py-4 text-left font-semibold">Asset</th>

                <th className="px-6 py-4 text-left font-semibold">Direction</th>

                <th className="px-6 py-4 text-right font-semibold">P&amp;L</th>

                <th className="px-6 py-4 text-center font-semibold">Result</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
              {trades.map((trade) => {
                const pnl = trade.pnl ?? trade.profitLoss ?? 0;
                const isProfit = pnl >= 0;

                const { isLong, className } = getDirectionStyle(
                  trade.direction,
                );

                return (
                  <tr
                    key={trade.id}
                    className="group transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-6 py-5 text-sm font-medium text-gray-500 dark:text-slate-400">
                      {trade.id}
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {trade.asset}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${className}`}
                      >
                        {isLong ? (
                          <FaArrowTrendUp size={13} />
                        ) : (
                          <FaArrowTrendDown size={13} />
                        )}

                        {trade.direction}
                      </span>
                    </td>

                    <td
                      className={`px-6 py-5 text-right text-lg font-bold ${
                        isProfit
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isProfit ? "+" : "-"}${Math.abs(pnl).toLocaleString()}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold ${
                          isProfit
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                            : "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
                        }`}
                      >
                        {isProfit ? "Profit" : "Loss"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {trades.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-3 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                No Data
              </div>

              <p className="text-sm text-gray-500 dark:text-slate-400">
                No trades available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TradesTable;
