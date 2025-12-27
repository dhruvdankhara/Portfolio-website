import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGooglecolab,
  SiJavascript,
  SiJsonwebtokens,
  SiJupyter,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbApi, TbChartBar, TbMathFunction } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  FileSpreadsheet,
  FlaskConical,
  Layers,
  LineChart,
  Server,
  Settings2,
  Wrench,
} from "lucide-react";
import Title from "./Title";

const Skills = () => {
  // ===== WEB DEVELOPMENT SKILLS =====
  const languages = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "SQL",
  ];
  const languageIcons = [
    <SiC className="text-[#A8B9CC]" key="c" />,
    <SiCplusplus className="text-[#00599C]" key="cpp" />,
    <SiPython className="text-[#3776AB]" key="python" />,
    <SiJavascript className="text-[#F7DF1E]" key="javascript" />,
    <SiTypescript className="text-[#3178C6]" key="typescript" />,
    <FaJava className="text-[#ED8B00]" key="java" />,
    <Database className="text-[#336791]" key="sql" />,
  ];

  const frontend = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Shadcn UI",
    "HTML",
    "CSS",
  ];
  const frontendIcons = [
    <SiReact className="text-[#61DAFB]" key="react" />,
    <SiNextdotjs className="text-black" key="nextjs" />,
    <SiTailwindcss className="text-[#06B6D4]" key="tailwind" />,
    <SiRedux className="text-[#764ABC]" key="redux" />,
    <SiShadcnui className="text-black" key="shadcn" />,
    <SiHtml5 className="text-[#E34F26]" key="html" />,
    <SiCss3 className="text-[#1572B6]" key="css" />,
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "REST APIs",
    "JWT",
    "WebSocket",
  ];
  const backendIcons = [
    <SiNodedotjs className="text-[#339933]" key="node" />,
    <SiExpress className="text-black" key="express" />,
    <SiFastapi className="text-[#009688]" key="fastapi" />,
    <SiFlask className="text-black" key="flask" />,
    <TbApi className="text-[#FF6B35]" key="rest" />,
    <SiJsonwebtokens className="text-[#D63AFF]" key="jwt" />,
    <SiSocketdotio className="text-black" key="socket" />,
  ];

  const databases = ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"];
  const databaseIcons = [
    <SiMongodb className="text-[#47A248]" key="mongodb" />,
    <SiMysql className="text-[#4479A1]" key="mysql" />,
    <SiPostgresql className="text-[#336791]" key="postgresql" />,
    <SiMongoose className="text-[#880000]" key="mongoose" />,
  ];

  // ===== DATA ANALYSIS SKILLS =====
  const dataLibraries = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
  ];
  const dataLibraryIcons = [
    <SiPython className="text-[#3776AB]" key="python-da" />,
    <SiPandas className="text-[#150458]" key="pandas" />,
    <SiNumpy className="text-[#013243]" key="numpy" />,
    <SiScikitlearn className="text-[#F7931E]" key="sklearn" />,
    <LineChart className="text-[#11557C]" key="matplotlib" />,
    <BarChart3 className="text-[#4C72B0]" key="seaborn" />,
  ];

  const dataDatabases = ["SQL", "MySQL", "PostgreSQL", "MongoDB"];
  const dataDatabaseIcons = [
    <Database className="text-[#336791]" key="sql-da" />,
    <SiMysql className="text-[#4479A1]" key="mysql-da" />,
    <SiPostgresql className="text-[#336791]" key="postgresql-da" />,
    <SiMongodb className="text-[#47A248]" key="mongodb-da" />,
  ];

  const dataWorkflows = [
    "Data Cleaning",
    "EDA",
    "Feature Engineering",
    "Hypothesis Testing",
    "Statistical Analysis",
    "Model Evaluation",
  ];
  const dataWorkflowIcons = [
    <Settings2 className="text-[#6366F1]" key="cleaning" />,
    <TbChartBar className="text-[#10B981]" key="eda" />,
    <BrainCircuit className="text-[#8B5CF6]" key="feature" />,
    <TbMathFunction className="text-[#F59E0B]" key="hypothesis" />,
    <FlaskConical className="text-[#EC4899]" key="stats" />,
    <LineChart className="text-[#06B6D4]" key="eval" />,
  ];

  const dataTools = [
    "Jupyter Notebook",
    "Google Colab",
    "Git",
    "Excel",
    "Data Visualization",
  ];
  const dataToolIcons = [
    <SiJupyter className="text-[#F37626]" key="jupyter" />,
    <SiGooglecolab className="text-[#F9AB00]" key="colab" />,
    <SiGit className="text-[#F05032]" key="git" />,
    <FileSpreadsheet className="text-[#217346]" key="excel" />,
    <BarChart3 className="text-[#FF6384]" key="dataviz" />,
  ];

  const webDevCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" strokeWidth={2.5} />,
      skills: languages,
      icons: languageIcons,
      bgColor: "bg-pop-yellow",
      hoverColor: "hover:bg-pop-yellow",
    },
    {
      title: "Frontend",
      icon: <Layers className="h-5 w-5" strokeWidth={2.5} />,
      skills: frontend,
      icons: frontendIcons,
      bgColor: "bg-pop-pink",
      hoverColor: "hover:bg-pop-pink",
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" strokeWidth={2.5} />,
      skills: backend,
      icons: backendIcons,
      bgColor: "bg-pop-teal",
      hoverColor: "hover:bg-pop-teal hover:text-white",
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" strokeWidth={2.5} />,
      skills: databases,
      icons: databaseIcons,
      bgColor: "bg-white",
      hoverColor: "hover:bg-black hover:text-white",
    },
  ];

  const dataAnalysisCategories = [
    {
      title: "Libraries",
      icon: <Code2 className="h-5 w-5" strokeWidth={2.5} />,
      skills: dataLibraries,
      icons: dataLibraryIcons,
      bgColor: "bg-pop-pink",
      hoverColor: "hover:bg-pop-pink",
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" strokeWidth={2.5} />,
      skills: dataDatabases,
      icons: dataDatabaseIcons,
      bgColor: "bg-white",
      hoverColor: "hover:bg-black hover:text-white",
    },
    {
      title: "Workflows",
      icon: <BrainCircuit className="h-5 w-5" strokeWidth={2.5} />,
      skills: dataWorkflows,
      icons: dataWorkflowIcons,
      bgColor: "bg-pop-yellow",
      hoverColor: "hover:bg-pop-yellow",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-5 w-5" strokeWidth={2.5} />,
      skills: dataTools,
      icons: dataToolIcons,
      bgColor: "bg-pop-teal",
      hoverColor: "hover:bg-pop-teal hover:text-white",
    },
  ];

  return (
    <section id="skills" className="border-t-2 border-black">
      {/* ===== WEB DEVELOPMENT SECTION ===== */}
      <div className="border-b-2 border-black">
        <Title text="Skills & Technologies" />
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black">
          <div className="bg-pop-teal p-8 md:p-12 lg:border-r-2 border-b-2 lg:border-b-0 border-black">
            <div className="pop-badge bg-black text-white mb-4">
              WEB DEVELOPMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-4">
              Full Stack
              <br />
              Development
            </h2>
            <p className="text-black/80 font-medium text-lg max-w-md">
              Building modern web applications from frontend to backend.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2">
            <div className="bg-pop-yellow p-8 flex flex-col justify-center border-r-2 border-black">
              <div className="text-6xl font-black text-black mb-1">22+</div>
              <p className="font-bold text-black/70">Technologies</p>
            </div>
            <div className="bg-white p-8 flex flex-col justify-center">
              <div className="text-6xl font-black text-pop-teal mb-1">4</div>
              <p className="font-bold text-black/70">Core Areas</p>
            </div>
          </div>
        </div>

        {/* Web Dev Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {webDevCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-6 ${category.bgColor} ${
                catIndex < 3 ? "lg:border-r-2" : ""
              } ${
                catIndex % 2 === 0
                  ? "md:border-r-2 lg:border-r-2"
                  : "md:border-r-0"
              } ${
                catIndex === 2 ? "md:border-r-2" : ""
              } border-b-2 lg:border-b-0 border-black`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-white border-2 border-black p-3 flex items-center gap-3 ${category.hoverColor} hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 cursor-default`}
                  >
                    <div className="text-xl [&>svg]:w-5 [&>svg]:h-5 flex-shrink-0">
                      {category.icons[index]}
                    </div>
                    <span className="font-bold text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== DATA ANALYSIS SECTION ===== */}
      <div className="border-b-2 border-black">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black">
          <div className="bg-pop-pink p-8 md:p-12 lg:border-r-2 border-b-2 lg:border-b-0 border-black">
            <div className="pop-badge bg-black text-white mb-4">
              DATA ANALYSIS
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-4">
              Data Science
              <br />& Analytics
            </h2>
            <p className="text-black/80 font-medium text-lg max-w-md">
              Extracting insights from data through analysis and visualization.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2">
            <div className="bg-white p-8 flex flex-col justify-center border-r-2 border-black">
              <div className="text-6xl font-black text-pop-pink mb-1">15+</div>
              <p className="font-bold text-black/70">Skills</p>
            </div>
            <div className="bg-pop-yellow p-8 flex flex-col justify-center">
              <div className="text-6xl font-black text-black mb-1">4</div>
              <p className="font-bold text-black/70">Specializations</p>
            </div>
          </div>
        </div>

        {/* Data Analysis Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {dataAnalysisCategories.map((category, catIndex) => (
            <div
              key={`da-${category.title}`}
              className={`p-6 ${category.bgColor} ${
                catIndex < 3 ? "lg:border-r-2" : ""
              } ${
                catIndex % 2 === 0
                  ? "md:border-r-2 lg:border-r-2"
                  : "md:border-r-0"
              } ${
                catIndex === 2 ? "md:border-r-2" : ""
              } border-b-2 lg:border-b-0 border-black`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-black">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-white border-2 border-black p-3 flex items-center gap-3 ${category.hoverColor} hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 cursor-default`}
                  >
                    <div className="text-xl [&>svg]:w-5 [&>svg]:h-5 flex-shrink-0">
                      {category.icons[index]}
                    </div>
                    <span className="font-bold text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
