import React, { createContext, useContext, useMemo } from "react";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
  SiMysql,
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
}

interface ProjectContextType {
  projects: Project[];
  getTopProjects: (count: number) => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        order: 1,
        title: "SIVA - Gestão de Frotas",
        description:
          "Sistema integrado para controle de viaturas e atendimentos em tempo real.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
        technologies: [
          { icon: SiSpringboot, name: "Spring" },
          { icon: FaReact, name: "React" },
          { icon: FaDocker, name: "Docker" },
          { icon: SiMysql, name: "MySQL" },
        ],
        githubUrl: "https://github.com/niuan/siva",
        deployUrl: "https://siva-demo.com",
      },
      {
        id: 2,
        order: 2,
        title: "IA Data Intelligence",
        description:
          "Automação de planilhas complexas utilizando Python para processamento de dados legados.",
        image:
          "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        technologies: [
          { icon: FaPython, name: "Python" },
          { icon: SiPostgresql, name: "PostgreSQL" },
        ],
        githubUrl: "https://github.com/niuan/python-excel",
      },
      {
        id: 3,
        order: 3,
        title: "Deep Ocean Portfolio",
        description:
          "Site pessoal com temas dinâmicos e avatar em pixel art customizado.",
        image:
          "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
        technologies: [
          { icon: FaReact, name: "React" },
          { icon: SiTypescript, name: "TypeScript" },
        ],
        githubUrl: "https://github.com/niuan/portfolio",
        deployUrl: "https://niuan.dev",
      },
    ],
    [],
  );

  const getTopProjects = (count: number) => {
    return [...projects].sort((a, b) => a.order - b.order).slice(0, count);
  };

  return (
    <ProjectContext.Provider value={{ projects, getTopProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProjects must be used within ProjectProvider");
  return context;
};
