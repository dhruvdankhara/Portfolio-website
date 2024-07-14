import SkillCard from "../components/SkillCard";
import Title from "../components/Title";

function Skills() {
  const languages = [
    "html",
    "css",
    "javascript",
    "bootstrap",
    "tailwindcss",
    "c",
    "python",
    "nodejs",
    "expressjs",
    "mongodb",
    "reactjs",
  ];

  return (
    <section className="h-full py-20 md:py-36">
      <div className=" mx-5 flex flex-col items-center justify-center gap-10 ">
        <Title title="Tech Stack" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 ">
          {languages.map((lang) => (
            <SkillCard key={lang} imagePath={`./src/images/${lang}.svg`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
