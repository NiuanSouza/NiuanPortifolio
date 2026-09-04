import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { HiChevronLeft, HiChevronRight, HiArrowLeft } from "react-icons/hi";
import { useParams, Link } from "react-router-dom";
import { useProjects } from "../../context/ProjectContext";
import styles from "./ProjectDetails.module.css";

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjects();
  const project = projects.find(p => p.id === Number(id));

  const [activeTab, setActiveTab] = useState<"root" | "frontend" | "backend">("root");
  const [readmeContent, setReadmeContent] = useState<string>("Carregando...");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesCount = project?.advancedConfig?.imagesCount || 1;
  const githubRepoName = project?.githubUrl ? project.githubUrl.split("/").slice(-2).join("/") : "";
  const rawBaseUrl = githubRepoName ? `https://raw.githubusercontent.com/${githubRepoName}/main` : "";

  useEffect(() => {
    if (!project) return;
    
    const fetchReadme = async () => {
      if (!rawBaseUrl) {
        setReadmeContent("Este projeto não possui um repositório vinculado para carregar o README.");
        return;
      }

      setReadmeContent("Carregando...");
      let readmePath = "README.md";
      
      if (activeTab === "frontend") readmePath = "Front-End/README.md";
      if (activeTab === "backend") readmePath = "Back-End/README.md";

      try {
        const res = await fetch(`${rawBaseUrl}/${readmePath}`);
        if (!res.ok) {
          throw new Error("Não encontrado");
        }
        const text = await res.text();
        setReadmeContent(text);
      } catch (e) {
        setReadmeContent(`### Ops!
Não conseguimos carregar o README de \`${readmePath}\`.

**Como usar o template?**
Certifique-se de que o seu repositório tenha a seguinte estrutura:
- \`README.md\`
- \`Front-End/README.md\`
- \`Back-End/README.md\`
- \`deploy_config/config.json\`
`);
      }
    };

    fetchReadme();
  }, [activeTab, rawBaseUrl, project]);

  if (!project) {
    return <div style={{ padding: "4rem", textAlign: "center", color: "white" }}>Projeto não encontrado ou carregando...</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesCount);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
  };

  const getImageUrl = () => {
    if (project.advancedConfig && rawBaseUrl) {
      return `${rawBaseUrl}/deploy_config/picture/${currentImageIndex}.png`;
    }
    return project.image;
  };

  return (
    <div className={styles.pageContainer}>
      <Link to="/projects" className={styles.backBtn}>
        <HiArrowLeft size={20} /> Voltar aos Projetos
      </Link>

      <div className={styles.modal}>
        <div className={styles.carousel}>
          {imagesCount > 1 && (
            <button className={`${styles.carouselBtn} ${styles.prevBtn}`} onClick={handlePrevImage}>
              <HiChevronLeft size={24} />
            </button>
          )}
          
          <img 
            src={getImageUrl()} 
            alt={project.title} 
            className={styles.carouselImg} 
            onError={(e) => (e.currentTarget.src = project.image)}
          />
          
          {imagesCount > 1 && (
            <button className={`${styles.carouselBtn} ${styles.nextBtn}`} onClick={handleNextImage}>
              <HiChevronRight size={24} />
            </button>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
          </div>

          <div className={styles.tabs}>
            <button 
              className={`${styles.tabBtn} ${activeTab === "root" ? styles.active : ""}`}
              onClick={() => setActiveTab("root")}
            >
              Visão Geral
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === "frontend" ? styles.active : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Front-End
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === "backend" ? styles.active : ""}`}
              onClick={() => setActiveTab("backend")}
            >
              Back-End
            </button>
          </div>

          <div className={styles.markdownBody}>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
