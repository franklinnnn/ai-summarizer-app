import React from "react";

const date = new Date();

const Footer = () => {
  return (
    <footer className="relative w-full bottom-4 text-slate-100 bg-red-400">
      {date.getFullYear()} Franklin Assa
    </footer>
  );
};

export default Footer;
