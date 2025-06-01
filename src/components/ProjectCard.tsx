interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bento-card flex flex-col h-full">
      <div className="w-full aspect-video bg-bento-hover rounded-lg mb-4 animate-pulse-slow flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-bento-hover/30 text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-white/70 text-sm mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-bento-accent hover:underline"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-bento-accent hover:underline"
        >
          GitHub
        </a>
        <a
          href="#"
          className="text-sm text-bento-accent hover:underline ml-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
