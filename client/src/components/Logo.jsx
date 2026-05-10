import { Link } from "react-router-dom";

export default function Logo({ className = "", hideText = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Graduation Cap SVG */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
      >
        {/* Top Board */}
        <path
          d="M12 3L1 9L12 15L23 9L12 3Z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Cap Base */}
        <path
          d="M6 12.5V17C6 19.5 8.5 21 12 21C15.5 21 18 19.5 18 17V12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tassel */}
        <path
          d="M23 9V16.5C23 17.5 22 18.5 21.5 19.5C21 18.5 20 17.5 20 16.5V10.5"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Top Button */}
        <circle cx="12" cy="9" r="1.5" fill="white" />
      </svg>

      {!hideText && (
        <span className="font-heading text-[16px] font-bold tracking-[-0.02em] text-white">
          ITQHUB
        </span>
      )}
    </div>
  );
}
