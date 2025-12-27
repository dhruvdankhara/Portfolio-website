import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bg-white p-6 md:p-8 flex flex-col h-full">
      {project.image ? (
        <div className="w-full aspect-video overflow-hidden mb-6 border-2 border-black shadow-pop">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-gray-100 mb-6 flex items-center justify-center border-2 border-black">
          <span className="text-black/30 text-sm font-bold">
            Project Preview
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>

      <p className="text-black/70 text-sm mb-4 font-medium">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="bg-pop-yellow border-2 border-black px-2 py-1 text-xs font-bold"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="bg-gray-100 border-2 border-black px-2 py-1 text-xs font-bold">
            +{project.techStack.length - 5} more
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t-2 border-black">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pop-btn-accent text-sm py-2 px-4 inline-flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pop-btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
        >
          <Github className="h-4 w-4" strokeWidth={2.5} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
