// import React from "react";

function Title({ title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-white text-2xl font-bold tracking-wider">{title}</h2>
      <div className="mt-3 w-36 h-0 border-t border-white"></div>
    </div>
  );
}

export default Title;
