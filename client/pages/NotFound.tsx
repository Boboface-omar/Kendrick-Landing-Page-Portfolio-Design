import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A1A59] to-[#8A1919] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-white font-island-moments text-4xl md:text-6xl mb-8">
          K-dot
        </div>
        <h1 className="text-white font-inria-serif text-6xl md:text-8xl font-bold mb-4">
          404
        </h1>
        <p className="text-white/80 font-inria-serif text-xl md:text-2xl mb-8">
          This page doesn't exist in my discography
        </p>
        <a
          href="/"
          className="inline-block text-white font-inria-serif text-lg md:text-xl border border-white/50 px-8 py-3 hover:bg-white/10 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
