import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { FaJava, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
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
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    // 2. Fetch GitHub projects
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NiuanSouza/repos?sort=updated&per_page=10");
        if (!response.ok) return;
        
        const repos = await response.json();
        
        const newProjects: Project[] = await Promise.all(repos.map(async (repo: any, index: number) => {
          let advancedConfig = undefined;
          let deployUrl = repo.homepage || undefined;
          let description = repo.description || "Repositório do GitHub";
          
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
              if (config.description) {
                description = config.description;
              }
            }
          } catch (e) {
            // Se falhar, segue sem configuração avançada
          }

          // Se tiver um deployUrl apontando para o onrender.com, tenta fazer o wake-up
          if (deployUrl?.includes("onrender.com")) {
            fetch(deployUrl, { mode: "no-cors" }).catch(() => {});
          }

          return {
            id: repo.id,
            order: index,
            title: repo.name.replace(/-/g, " "),
            description,
            image: `https://placehold.co/600x400/1e1e1e/ffffff?text=${encodeURIComponent(repo.name)}`,
            technologies: [getLanguageIcon(repo.language)],
            githubUrl: repo.html_url,
            deployUrl,
            advancedConfig
          };
        }));

        setProjects(newProjects);
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
