import { useProjects } from "../../context/ProjectContext";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HiCollection } from "react-icons/hi";
import styles from "./Projects.module.css";

export const Projects = () => {
  const { projects } = useProjects();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <HiCollection className={styles.icon} />
          <h1 className={styles.title}>
            Todos os <span className={styles.accent}>Projetos</span>
          </h1>
        </div>
        <p className={styles.subtitle}>
          Uma coleção completa de sistemas, automações e estudos técnicos
          desenvolvidos por mim.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
};
