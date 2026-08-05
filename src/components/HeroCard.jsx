const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-[#0f172a] dark:via-[#111827] dark:to-[#020617] p-8 md:p-12 shadow-2xl">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10">
        <span className="inline-flex items-center rounded-full bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-200">
          🚀 Live Trading Dashboard
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
          Trader Risk Dashboard
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-200">
          Monitor your trading performance, account health, risk exposure, and
          portfolio analytics from one centralized dashboard.
        </p>
      </div>
    </section>
  );
};

export default Hero;
