import React, { createContext, useContext, useMemo } from "react";
import { FaReact, FaPython, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiNodedotjs,
  SiExpress,
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
        id: 0,
        order: 1,
        title: "E-commerce 2.0 Full-Stack",
        description:
          "Plataforma de e-commerce com arquitetura MVC, autenticação JWT, carrinho persistente e integração total entre React e Node.js.",
        image: "/projects/ecommerce.png",
        technologies: [
          { icon: FaReact, name: "React" },
          { icon: SiNodedotjs, name: "Node.js" },
          { icon: SiExpress, name: "Express" },
          { icon: SiPostgresql, name: "PostgreSQL" },
        ],
        githubUrl: "https://github.com/NiuanSouza/Ecommer-2.0",
        deployUrl: "https://ecommer-2-0-1.onrender.com/",
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
