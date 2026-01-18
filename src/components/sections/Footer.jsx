import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastEdited = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black/50 to-black py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="text-center md:text-left">
            <p className="mb-1">
              © {currentYear} Christian W. Binayan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Last updated: {lastEdited}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs">
              Built with React, Tailwind CSS, and Vite. Powered by Cursor AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
