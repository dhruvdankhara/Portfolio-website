import React from "react";

function SkillCard({ imagePath, altText }) {
  return (
    <div className="bg-[#DFC1C1] bg-opacity-10 p-4 w-30 h-30 md:w-40 md:h-40 flex flex-col items-center justify-evenly rounded-lg">
      <img
        className="w-20 md:w-24 hover:scale-125 transition-transform"
        src={imagePath}
        alt={altText}
      />
    </div>
  );
}

export default SkillCard;
