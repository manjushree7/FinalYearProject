import React from "react";

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
