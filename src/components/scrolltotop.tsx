import React from "react";

// ChevronUp SVG Component
const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 0 1 .75.75v13.19l5.22-5.22a.75.75 0 1 1 1.06 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 1 1 1.06-1.06l5.22 5.22V4.5a.75.75 0 0 1 .75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

// ScrollToTopButton Component
const ScrollToTopButton: React.FC<{ scrollToTop: () => void }> = ({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-transparent border-2 border-blue-600 text-blue-600 p-4 rounded-full shadow-lg hover:bg-black hover:text-white transition-all fancy-button flex items-center justify-center"
    >
      {/* Up Arrow (Chevron) */}
      <ChevronUp />

      {/* Star Animations */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className={`star-${index + 1}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              className="fil0"
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
            />
          </svg>
        </div>
      ))}
    </button>
  );
};

export default ScrollToTopButton;
