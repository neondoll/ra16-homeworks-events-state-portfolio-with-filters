import cn from "classnames";
import type { HTMLAttributes } from "react";

interface ProjectListProps {
  className?: HTMLAttributes<HTMLUListElement>["className"];
  projects: Project[];
}

function ProjectList({ className, projects }: ProjectListProps) {
  return (
    <ul className={cn(className, "project-list")}>
      {projects.map((project, index) => (
        <li
          className="project-list__item"
          key={`project-item-${index + 1}`}
        >
          <img
            alt={project.img}
            className="project-list__img"
            src={project.img}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
