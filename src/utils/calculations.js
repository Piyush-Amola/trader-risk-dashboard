// Total Profit & Loss
export const getTotalPnL = (trades) => {
  return trades.reduce((sum, trade) => sum + trade.pnl, 0);
};

// Current Balance
export const getCurrentBalance = (startingBalance, trades) => {
  return startingBalance + getTotalPnL(trades);
};

// Winning Trades
export const getWinningTrades = (trades) => {
  return trades.filter((trade) => trade.pnl > 0).length;
};

// Losing Trades
export const getLosingTrades = (trades) => {
  return trades.filter((trade) => trade.pnl < 0).length;
};

// Win Rate
export const getWinRate = (trades) => {
  if (trades.length === 0) return 0;

  return ((getWinningTrades(trades) / trades.length) * 100).toFixed(2);
};

// Largest Winning Trade
export const getLargestWin = (trades) => {
  const wins = trades.filter((trade) => trade.pnl > 0);

  if (wins.length === 0) return 0;

  return Math.max(...wins.map((trade) => trade.pnl));
};

// Largest Losing Trade
export const getLargestLoss = (trades) => {
  const losses = trades.filter((trade) => trade.pnl < 0);

  if (losses.length === 0) return 0;

  return Math.min(...losses.map((trade) => trade.pnl));
};

// Current Drawdown
export const getCurrentDrawdown = (startingBalance, currentBalance) => {
  return Math.max(0, startingBalance - currentBalance);
};

// Remaining Drawdown
export const getRemainingDrawdown = (maxDrawdown, currentDrawdown) => {
  return Math.max(0, maxDrawdown - currentDrawdown);
};

// Current Day Loss
export const getCurrentDayLoss = (trades) => {
  return Math.abs(
    trades
      .filter((trade) => trade.pnl < 0)
      .reduce((sum, trade) => sum + trade.pnl, 0),
  );
};

// Remaining Daily Loss Limit
export const getRemainingDailyLossLimit = (dailyLossLimit, currentDayLoss) => {
  return Math.max(0, dailyLossLimit - currentDayLoss);
};

// Risk Status
export const getRiskStatus = (remainingDrawdown, remainingDailyLoss) => {
  if (remainingDrawdown <= 1000 || remainingDailyLoss <= 500) {
    return "At Risk";
  }

  if (remainingDrawdown <= 3000 || remainingDailyLoss <= 1500) {
    return "Approaching Limit";
  }

  return "Safe";
};

// Equity Curve Data
export const getEquityCurve = (startingBalance, trades) => {
  let balance = startingBalance;

  return trades.map((trade) => {
    balance += trade.pnl;

    return {
      trade: trade.id,
      balance,
    };
  });
};

// Performance by Asset
export const getPerformanceByAsset = (trades) => {
  return trades.reduce((result, trade) => {
    if (!result[trade.asset]) {
      result[trade.asset] = 0;
    }

    result[trade.asset] += trade.pnl;

    return result;
  }, {});
};
