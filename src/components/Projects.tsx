import Title from "./Title";
import ProjectCard from "@/components/ProjectCard";
import budgetLink from "@/assets/budgetlink.png";
import devSpace from "@/assets/blogsphere.png";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "BudgetLink – Expense Management with Role-Based Access  ",
      description:
        "Built an expense tracker web app with role-based access for managing family budgets. Used Recharts for interactive visual data representation of expenses. ",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Redux",
        "Rechart",
        "JWT",
      ],
      image: budgetLink,
      liveLink: "https://budget-link.vercel.app",
      githubLink: "https://github.com/dhruvdankhara/budgetlink",
    },
    {
      title: "DevSpace – Social Blogging Website for Developers",
      description:
        "Developed a blogging platform with features like post creation, comment, like and follow other users. Implemented secure authentication and authorization with JWT.",
      techStack: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Multer",
        "Cloudinary",
        "etc…",
      ],
      image: devSpace,
      liveLink: "https://blog-sphere-rho.vercel.app/",
      githubLink: "https://github.com/dhruvdankhara/BlogSphere",
    },
  ];

  return (
    <section id="projects" className="pt-20">
      <div className="container mx-auto px-6">
        <Title text={"Projects"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
