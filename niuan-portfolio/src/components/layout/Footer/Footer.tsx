import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaCodeBranch,
} from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <HiTerminal size={20} />
              <span>NIUAN_SOUZA</span>
            </div>
            <p className={styles.tagline}>
              Construindo soluções escaláveis e arquiteturas de dados
              eficientes.
            </p>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/NiuanSouza"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/niuansouza"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:niuan.spolid@hotmail.com"
              className={styles.socialLink}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {currentYear} — DESENVOLVIDO POR NIUAN SPOLIDORIO
          </div>

          <div className={styles.status}>
            <FaCodeBranch className={styles.statusIcon} />
            <span>v2.0.4 — SYSTEM_STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
