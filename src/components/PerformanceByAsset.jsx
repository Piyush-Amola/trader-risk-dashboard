// import { FaChartSimple } from "react-icons/fa6";

// import { trades } from "../data/trades";
// import { getPerformanceByAsset } from "../utils/calculations";

// const PerformanceByAsset = () => {
//   const performance = getPerformanceByAsset(trades);

//   const assetPerformance = Object.entries(performance).map(([asset, pnl]) => ({
//     asset,
//     pnl,
//   }));

//   const maxValue = Math.max(
//     ...assetPerformance.map((item) => Math.abs(item.pnl)),
//     1,
//   );

//   return (
//     <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-900">
//       <div className="mb-8 flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Performance by Asset
//           </h2>

//           <p className="mt-2 text-gray-600 dark:text-slate-400">
//             Analyze profit and loss distribution across traded assets.
//           </p>
//         </div>

//         <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10">
//           <FaChartSimple className="text-2xl text-blue-600 dark:text-blue-400" />
//         </div>
//       </div>

//       <div className="space-y-7">
//         {assetPerformance.map((item) => {
//           const isProfit = item.pnl >= 0;

//           return (
//             <div key={item.asset}>
//               <div className="mb-3 flex items-center justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {item.asset}
//                   </h3>

//                   <p className="text-sm text-gray-500 dark:text-slate-500">
//                     Total Profit / Loss
//                   </p>
//                 </div>

//                 <span
//                   className={`text-lg font-bold ${
//                     isProfit
//                       ? "text-green-600 dark:text-green-400"
//                       : "text-red-600 dark:text-red-400"
//                   }`}
//                 >
//                   {isProfit ? "+" : "-"}${Math.abs(item.pnl).toLocaleString()}
//                 </span>
//               </div>

//               <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
//                 <div
//                   className={`h-full rounded-full transition-all duration-700 ${
//                     isProfit ? "bg-green-500" : "bg-red-500"
//                   }`}
//                   style={{
//                     width: `${(Math.abs(item.pnl) / maxValue) * 100}%`,
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         })}

//         {assetPerformance.length === 0 && (
//           <div className="py-12 text-center text-gray-500 dark:text-slate-400">
//             No asset performance data available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PerformanceByAsset;

import { memo, useMemo } from "react";
import {
  FaChartSimple,
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

import { trades } from "../data/trades";
import { getPerformanceByAsset } from "../utils/calculations";

const PerformanceRow = memo(({ item, index, maxValue }) => {
  const isProfit = item.pnl >= 0;

  const percentage = Math.min((Math.abs(item.pnl) / maxValue) * 100, 100);

  return (
    <article
      className="
      rounded-2xl border border-gray-200
      bg-white p-5
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg

      dark:border-slate-700
      dark:bg-slate-900
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
            flex h-11 w-11 items-center justify-center
            rounded-xl bg-blue-100
            font-bold text-blue-600

            dark:bg-blue-500/20
            dark:text-blue-400
            "
          >
            {index + 1}
          </div>

          <div>
            <h3
              className="
              text-lg font-semibold
              text-gray-900
              dark:text-white
              "
            >
              {item.asset}
            </h3>

            <p
              className="
              text-sm text-gray-500
              dark:text-slate-400
              "
            >
              Total Profit / Loss
            </p>
          </div>
        </div>

        <div
          className={`
          flex items-center gap-2
          text-xl font-bold

          ${
            isProfit
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }
          `}
        >
          {isProfit ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          {isProfit ? "+" : "-"}${Math.abs(item.pnl).toLocaleString()}
        </div>
      </div>

      <div className="mt-5">
        <div
          className="
          mb-2 flex justify-between
          text-xs text-gray-500
          dark:text-slate-400
          "
        >
          <span>Performance</span>

          <span>{percentage.toFixed(1)}%</span>
        </div>

        <div
          className="
          h-3 overflow-hidden rounded-full
          bg-gray-200
          dark:bg-slate-700
          "
        >
          <div
            className={`
            h-full rounded-full
            transition-all duration-1000

            ${
              isProfit
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "bg-gradient-to-r from-red-400 to-red-600"
            }
            `}
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
    </article>
  );
});

const PerformanceByAsset = () => {
  const assetPerformance = useMemo(() => {
    const result = getPerformanceByAsset(trades);

    return Object.entries(result)
      .map(([asset, pnl]) => ({
        asset,
        pnl: Number(pnl),
      }))
      .sort((a, b) => Math.abs(b.pnl) - Math.abs(a.pnl));
  }, []);

  const maxValue = useMemo(() => {
    return Math.max(...assetPerformance.map((item) => Math.abs(item.pnl)), 1);
  }, [assetPerformance]);

  return (
    <section
      className="
      rounded-3xl
      border border-gray-200
      bg-white
      p-5 shadow-xl

      sm:p-6

      dark:border-slate-700
      dark:bg-slate-950
      "
    >
      {/* Header */}

      <div
        className="
        mb-8 flex flex-col gap-5

        sm:flex-row
        sm:items-center
        sm:justify-between
        "
      >
        <div>
          <h2
            className="
            text-2xl font-bold
            text-gray-900

            sm:text-3xl

            dark:text-white
            "
          >
            Performance By Asset
          </h2>

          <p
            className="
            mt-2 text-gray-600
            dark:text-slate-400
            "
          >
            Analyze profit and loss distribution across your trading assets.
          </p>
        </div>

        <div
          className="
          flex h-14 w-14
          items-center justify-center

          rounded-2xl
          bg-blue-100

          dark:bg-blue-500/20
          "
        >
          <FaChartSimple
            className="
            text-3xl
            text-blue-600

            dark:text-blue-400
            "
          />
        </div>
      </div>

      {/* Data */}

      <div className="space-y-5">
        {assetPerformance.length > 0 ? (
          assetPerformance.map((item, index) => (
            <PerformanceRow
              key={item.asset}
              item={item}
              index={index}
              maxValue={maxValue}
            />
          ))
        ) : (
          <div
            className="
                py-14 text-center
                text-gray-500
                dark:text-slate-400
                "
          >
            <FaChartSimple
              className="
                  mx-auto mb-4
                  text-5xl
                  text-gray-300
                  dark:text-slate-700
                  "
            />

            <h3
              className="
                  text-lg font-semibold
                  text-gray-700
                  dark:text-white
                  "
            >
              No Performance Data
            </h3>

            <p className="mt-2 text-sm">
              Start trading to view asset analytics.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PerformanceByAsset;
