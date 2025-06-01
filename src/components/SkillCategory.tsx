const SkillCategory = ({
  title,
  skills,
  icons,
}: {
  title: string;
  skills: string[];
  icons: React.ReactNode[];
}) => {
  return (
    <div className="aspect-square  bento-card">
      <h3 className="bento-heading mb-7">{title}</h3>
      <div className="grid grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="aspect-square bg-bento-hover/20 rounded-lg flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors text-xs animate-float gap-2 p-2 border border-white/10"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-2xl [&>svg]:w-8 [&>svg]:h-8">
              {icons[index]}
            </div>
            <span className="text-center">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
