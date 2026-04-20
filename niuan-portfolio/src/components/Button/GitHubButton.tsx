import { FaGithub } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

interface GitHubButtonProps {
  url: string;
}

export const GitHubButton: React.FC<GitHubButtonProps> = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.githubBtn}
    title="Ver código no GitHub"
  >
    <FaGithub size={20} />
    <span>GitHub</span>
  </a>
);
