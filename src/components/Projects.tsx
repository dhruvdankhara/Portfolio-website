import Title from "./Title";
import ProjectCard from "@/components/ProjectCard";
import walletLink from "@/assets/walletlink.png";
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
      title: "Wallet Link – Family Expense Tracker Web App",
      description:
        "Built an expense tracker web app with role-based access for managing family budgets. Implemented features like creating private wallets, tracking expenses and tracking current balance.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Redux",
        "Rechart",
        "JWT",
        "Nodemailer",
      ],
      image: walletLink,
      liveLink: "https://walletlink-dhruv.vercel.app/",
      githubLink: "https://github.com/dhruvdankhara/walletlink",
    },
    {
      title: "Blog Sphere – Social Blogging Website ",
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
