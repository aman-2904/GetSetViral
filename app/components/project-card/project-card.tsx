import type { Project } from "~/data/projects";
import styles from "./project-card.module.css";

interface ProjectCardProps {
  /**
   * The project data to display
   * @important
   */
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={className}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={project.imageUrl} alt={project.title} className={styles.image} loading="lazy" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.description && <p className={styles.description}>{project.description}</p>}
        </div>
      </article>
    </div>
  );
}
