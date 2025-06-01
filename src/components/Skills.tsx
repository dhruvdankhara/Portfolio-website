import Title from "@/components/Title";
import SkillCategory from "@/components/SkillCategory";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiFigma,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL",
  ];
  const languageIcons = [
    <SiPython className="text-[#3776AB]" />,
    <SiJavascript className="text-[#F7DF1E]" />,
    <SiTypescript className="text-[#3178C6]" />,
    <SiHtml5 className="text-[#E34F26]" />,
    <SiCss3 className="text-[#1572B6]" />,
    <SiMysql className="text-[#4479A1]" />,
  ];

  const frontend = ["React", "Redux", "Tailwind", "Shadcn UI", "Bootstrap"];
  const frontendIcons = [
    <SiReact className="text-[#61DAFB]" />,
    <SiRedux className="text-[#764ABC]" />,
    <SiTailwindcss className="text-[#06B6D4]" />,
    <SiShadcnui className="text-white" />,
    <SiBootstrap className="text-[#7952B3]" />,
  ];

  const backend = ["Node.js", "Express", "MongoDB", "REST API", "WebSocket"];
  const backendIcons = [
    <SiNodedotjs className="text-[#339933]" />,
    <SiExpress className="text-white" />,
    <SiMongodb className="text-[#47A248]" />,
    <TbApi className="text-[#d8e827]" />,
    <SiSocketdotio className="text-[#010101]" />,
  ];

  const tools = ["Git", "Github", "Postman", "Vercel", "Figma", "Vite"];
  const toolIcons = [
    <SiGit className="text-[#F05032]" />,
    <SiGithub className="text-white" />,
    <SiPostman className="text-[#FF6C37]" />,
    <SiVercel className="text-white" />,
    <SiFigma className="text-[#F24E1E]" />,
    <SiVite className="text-[#646CFF]" />,
  ];

  return (
    <section id="skills" className="pt-20">
      <div className="container mx-auto px-6">
        <Title text={"Skills & Expertise"} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <SkillCategory
            title="Languages"
            skills={languages}
            icons={languageIcons}
          />
          <SkillCategory
            title="Frontend"
            skills={frontend}
            icons={frontendIcons}
          />
          <SkillCategory
            title="Backend"
            skills={backend}
            icons={backendIcons}
          />
          <SkillCategory title="Tools" skills={tools} icons={toolIcons} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
