const StatusBadge = ({ status }) => {
  let styles = "";

  switch (status) {
    case "Safe":
      styles =
        "bg-green-100 text-green-700 border-green-300 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30";
      break;

    case "Approaching Limit":
      styles =
        "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/30";
      break;

    case "At Risk":
      styles =
        "bg-red-100 text-red-700 border-red-300 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30";
      break;

    default:
      styles =
        "bg-gray-100 text-gray-700 border-gray-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${styles}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
