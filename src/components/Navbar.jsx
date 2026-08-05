import { FaChartLine } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const traderName = "John Doe";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <FaChartLine className="text-2xl text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tradescape
            </h1>

            <p className="text-sm text-gray-500 dark:text-slate-400">
              Professional Trader Risk Dashboard
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition">
            <HiOutlineBell className="text-2xl text-gray-700 dark:text-slate-300" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition">
            <FiSettings className="text-2xl text-gray-700 dark:text-slate-300" />
          </button>

          {/* Dark/Light Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? (
              <CiLight className="text-2xl text-yellow-400" />
            ) : (
              <MdDarkMode className="text-2xl text-gray-700" />
            )}
          </button>

          <div className="h-10 w-px bg-gray-300 dark:bg-slate-700"></div>

          {/* Trader */}
          <div className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-lg font-bold text-white">
                {traderName.charAt(0).toUpperCase()}
              </div>

              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white dark:border-slate-900"></span>
            </div>

            <div className="hidden sm:block">
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {traderName}
              </h2>

              <p className="text-xs text-cyan-500">Evaluation Account</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
