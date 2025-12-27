import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import Title from "./Title";

const Projects = () => {
  const projects = [
    {
      title: "Wallet Link – Family Expense Tracker Web App",
      description:
        "Built an expense tracker web app with role-based access for managing family budgets. Implemented features like creating private wallets, tracking expenses and monitoring current balance.",
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
      image: "/projects/walletlink.png",
      liveLink: "https://walletlink-dhruv.vercel.app/",
      githubLink: "https://github.com/dhruvdankhara/walletlink",
    },
    {
      title: "Blog Sphere – Social Blogging Website",
      description:
        "Developed a blogging platform with features like post creation, comments, likes, and following other users. Implemented secure authentication and authorization with JWT.",
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
      image: "/projects/blogsphere.png",
      liveLink: "https://blog-sphere-rho.vercel.app/",
      githubLink: "https://github.com/dhruvdankhara/BlogSphere",
    },
  ];

  return (
    <section id="projects">
      <Title text="Projects" />
      {/* Section header row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-pop-pink p-8 md:p-12 border-r-2 border-b-2 border-black">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-black">
            Featured Projects
          </h2>
          <p className="text-black/70 font-medium max-w-md">
            Here are some of the projects I&apos;ve built. Each one taught me
            something new.
          </p>
        </div>
        <div className="bg-white p-8 md:p-12 border-b-2 border-black flex items-center justify-between">
          <div>
            <div className="text-5xl font-black text-pop-teal mb-2">6+</div>
            <p className="font-bold text-black/70">Projects Completed</p>
          </div>
          <a
            href="https://github.com/dhruvdankhara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black text-white border-2 border-black flex items-center justify-center hover:bg-pop-teal transition-colors"
          >
            <ArrowUpRight className="h-8 w-8" strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`border-b-2 border-black ${
              index === 0 ? "lg:border-r-2" : ""
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
