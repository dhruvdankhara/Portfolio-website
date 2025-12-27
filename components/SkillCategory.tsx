import { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icons: ReactNode[];
}

const SkillCategory = ({ title, skills, icons }: SkillCategoryProps) => {
  return (
    <div className="pop-card aspect-square">
      <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-3">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="aspect-square bg-white border-2 border-black flex flex-col items-center justify-center text-black hover:shadow-pop hover:-translate-y-0.5 transition-all duration-200 gap-2 p-2"
          >
            <div className="text-2xl [&>svg]:w-8 [&>svg]:h-8">
              {icons[index]}
            </div>
            <span className="text-center text-xs font-bold">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
