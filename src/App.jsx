import Navbar from "./components/Navbar";

import AccountSummary from "./components/AccountSummary";
import TradingStats from "./components/TradingStats";
import RiskIndicator from "./components/RiskIndicator";
import EquityChart from "./components/EquityChart";
import TradesTable from "./components/TradesTable";
import PerformanceByAsset from "./components/PerformanceByAsset";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import Hero from "./components/HeroCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />

        <div className="space-y-8">
          <AccountSummary />

          <TradingStats />

          <RiskIndicator />

          <div className="overflow-hidden rounded-2xl">
          </div>

          <TradesTable />

          <PerformanceByAsset />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
