import { useState, useEffect } from "react";
import { Avatar } from "../../components/Avatar/Avatar";
import { useProjects } from "../../context/ProjectContext";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import {
  HiArrowRight,
  HiCode,
  HiServer,
  HiDatabase,
  HiTerminal,
} from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaLinkedinIn,
  FaGithub,
  FaJava,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
// Usando Tabler Icons para o que falta no Font Awesome
import {
  TbBrandTypescript,
  TbBrandCSharp,
  TbBrandFlutter,
  TbSql,
  TbBrandOffice,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  const { getTopProjects } = useProjects();
  const [isAndroid, setIsAndroid] = useState(false);
  const featuredProjects = getTopProjects(3);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsAndroid(ua.indexOf("android") > -1);
  }, []);

  const stack = {
    front: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
      { name: "Flutter", icon: TbBrandFlutter, color: "#02569B" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
    back: [
      { name: "C# / .NET", icon: TbBrandCSharp, color: "#239120" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
    data: [
      { name: "SQL Server", icon: TbSql, color: "#CC2927" },
      { name: "MySQL", icon: HiDatabase, color: "#4479A1" },
      { name: "PostgreSQL", icon: HiDatabase, color: "#4169E1" },
      { name: "Power BI", icon: TbBrandOffice, color: "#F2C811" },
    ],
  };

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className={`${styles.container} ${isAndroid ? styles.androidLayout : ""}`}
    >
      <section className={styles.hero}>
        <div className={styles.avatarBlock}>
          <Avatar />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.badge}>Disponível para novos projetos</div>
          <h1 className={styles.title}>
            Niuan <span className={styles.accentText}>Souza</span>
          </h1>
          <p className={styles.description}>
            Desenvolvedor Full Stack graduado em ADS e focado em{" "}
            <strong>Banco de Dados</strong>. Especialista em soluções escaláveis
            com sólida base em <strong>C#</strong>, <strong>Java</strong> e{" "}
            <strong>Dados</strong>.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryBtn}
              onClick={handleScrollToProjects}
            >
              <HiTerminal size={20} />
              Meus Projetos <HiArrowRight className={styles.arrow} />
            </button>
            <a
              href="https://github.com/NiuanSouza"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/niuansouza"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="mailto:niuan.spolid@hotmail.com"
              className={styles.socialBtn}
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2>Projetos em Destaque</h2>
          <Link to="/projects" className={styles.link}>
            Ver todos <HiArrowRight />
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className={styles.stackSection}>
        <h2 className={styles.sectionTitle}>Especialidades Técnicas</h2>
        <div className={styles.stackGrid}>
          {[
            { title: "Interface & Mobile", data: stack.front, Icon: HiCode },
            { title: "Backend & Core", data: stack.back, Icon: HiServer },
            {
              title: "Dados & BI",
              data: stack.data,
              Icon: HiDatabase,
              full: true,
            },
          ].map((col) => (
            <div
              key={col.title}
              className={`${styles.stackColumn} ${col.full ? styles.fullWidth : ""}`}
            >
              <div className={styles.columnHeader}>
                <col.Icon size={24} />
                <h3>{col.title}</h3>
              </div>
              <div className={styles.techWrapper}>
                {col.data.map((tech) => (
                  <div
                    key={tech.name}
                    className={styles.techBadge}
                    style={
                      { "--brand-color": tech.color } as React.CSSProperties
                    }
                  >
                    <tech.icon className={styles.brandIcon} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
