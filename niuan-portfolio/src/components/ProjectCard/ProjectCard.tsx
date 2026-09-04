import React from "react";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Project } from "../../context/ProjectContext";
import styles from "./ProjectCard.module.css";

export const ProjectCard: React.FC<Project> = (project) => {
  const { id, title, description, image, technologies, githubUrl, deployUrl } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.techList}>
          {technologies.map((Tech, index) => (
            <div
              key={index}
              className={styles.techIconWrapper}
              title={Tech.name}
            >
              <Tech.icon size={20} />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.topLinks}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                <FaGithub size={18} /> Code
              </a>
            )}
            {deployUrl && (
              <a
                href={deployUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.deployBtn}
              >
                <HiExternalLink size={18} /> Live
              </a>
            )}
          </div>
          <Link 
            to={`/projetos/${id}`}
            className={styles.detailsBtn}
            style={{ textDecoration: 'none' }}
          >
            <HiEye size={18} /> Ver Mais
          </Link>
        </div>
      </div>
    </article>
  );
};
