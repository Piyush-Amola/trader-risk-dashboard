import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        mt-16
        border-t
        border-gray-300
        bg-white
        transition-colors

        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
         
          max-w-7xl
          gap-8
          px-6
          py-10

         
        "
      >
        {/* Copyright */}
        <div
          className="
            text-center
          "
        >
          <p
            className="
              text-sm
              text-gray-600

              dark:text-slate-400
            "
          >
            © {year} Tradescape. All rights reserved.
          </p>

          <p
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-1
              text-xs
              text-gray-500

              dark:text-slate-500
            "
          >
            Made with
            <FaHeart className="text-red-500" />
            for traders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
