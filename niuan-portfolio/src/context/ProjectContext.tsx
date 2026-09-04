import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { FaReact, FaJava, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiSharp,
  SiCplusplus,
  SiPhp,
  SiRuby,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiDart
} from "react-icons/si";

export interface Project {
  id: number;
  order: number;
  title: string;
  description: string;
  image: string;
  technologies: { icon: React.ElementType; name: string }[];
  githubUrl?: string;
  deployUrl?: string;
  advancedConfig?: {
    imagesCount: number;
    technologies?: {
      frontend?: string[];
      backend?: string[];
    };
  };
}

const PROJECTS_DATA: Project[] = [
  {
    id: 0,
    order: 1,
    title: "E-commerce 2.0 Full-Stack",
    description:
      "Plataforma de e-commerce com arquitetura MVC, autenticação JWT, carrinho persistente e integração total entre React e Node.js.",
    image: "/ecommerce_2.0.png",
    technologies: [
      { icon: FaReact, name: "React" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
    githubUrl: "https://github.com/NiuanSouza/Ecommer-2.0",
    deployUrl: "https://ecommer-2-0-1.onrender.com/",
  },
  {
    id: 1,
    order: 2,
    title: "Fazenda Urbana (Refatoração)",
    description:
      "Projeto de gestão de produção agrícola em processo de migração de sistema desktop para uma arquitetura escalável com Java Spring Boot.",
    image: "/fazenda_urbana.png",
    technologies: [
      { icon: FaJava, name: "Java 21" },
      { icon: SiSpringboot, name: "Spring Boot" },
      { icon: SiMysql, name: "MySQL" },
      { icon: FaReact, name: "React" },
    ],
    githubUrl: "https://github.com/NiuanSouza/fazenda_urbana",
  },
];

interface ProjectContextType {
  projects: Project[];
  getTopProjects: (count: number) => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const getLanguageIcon = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case "typescript": return { icon: SiTypescript, name: "TypeScript" };
    case "javascript": return { icon: FaJs, name: "JavaScript" };
    case "html": return { icon: FaHtml5, name: "HTML" };
    case "css": return { icon: FaCss3Alt, name: "CSS" };
    case "python": return { icon: FaPython, name: "Python" };
    case "java": return { icon: FaJava, name: "Java" };
    case "c#": return { icon: SiSharp, name: "C#" };
    case "c++": return { icon: SiCplusplus, name: "C++" };
    case "php": return { icon: SiPhp, name: "PHP" };
    case "ruby": return { icon: SiRuby, name: "Ruby" };
    case "go": return { icon: SiGo, name: "Go" };
    case "rust": return { icon: SiRust, name: "Rust" };
    case "swift": return { icon: SiSwift, name: "Swift" };
    case "kotlin": return { icon: SiKotlin, name: "Kotlin" };
    case "dart": return { icon: SiDart, name: "Dart" };
    default: return { icon: FaGithub, name: language || "Code" };
  }
};

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);

  useEffect(() => {
    // 1. Wake up Render services
    PROJECTS_DATA.forEach(project => {
      if (project.deployUrl?.includes("onrender.com")) {
        fetch(project.deployUrl, { mode: "no-cors" }).catch(() => {});
      }
    });

    // 2. Fetch GitHub projects
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NiuanSouza/repos?sort=updated&per_page=10");
        if (!response.ok) return;
        
        const repos = await response.json();
        
        const newProjects: Project[] = await Promise.all(repos.map(async (repo: any, index: number) => {
          let advancedConfig = undefined;
          let deployUrl = repo.homepage || undefined;
          
          try {
            const configRes = await fetch(`https://raw.githubusercontent.com/NiuanSouza/${repo.name}/main/deploy_config/config.json`);
            if (configRes.ok) {
              const config = await configRes.json();
              advancedConfig = {
                imagesCount: config.imagesCount || 1,
                technologies: config.technologies
              };
              if (config.liveUrl) {
                deployUrl = config.liveUrl;
              }
            }
          } catch (e) {
            // Se falhar, segue sem configuração avançada
          }

          return {
            id: 1000 + repo.id,
            order: 10 + index,
            title: repo.name.replace(/-/g, " "),
            description: repo.description || "Repositório do GitHub",
            image: `https://placehold.co/600x400/1e1e1e/ffffff?text=${encodeURIComponent(repo.name)}`,
            technologies: [getLanguageIcon(repo.language)],
            githubUrl: repo.html_url,
            deployUrl,
            advancedConfig
          };
        }));

        setProjects(prevProjects => {
          const existingUrls = prevProjects.map(p => p.githubUrl).filter(Boolean);
          const filteredNew = newProjects.filter(p => !existingUrls.includes(p.githubUrl));
          return [...prevProjects, ...filteredNew];
        });
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  const getTopProjects = (count: number) => {
    return [...projects].sort((a, b) => a.order - b.order).slice(0, count);
  };

  const value = useMemo(() => ({ projects, getTopProjects }), [projects]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within ProjectProvider");
  }
  return context;
};
