import { useState, useEffect } from "react";
import { HiOutlineColorSwatch, HiTerminal } from "react-icons/hi";
import { ThemeSelect } from "../../ThemeSelect/ThemeSelect";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gatilho rápido (10px) para transição quase instantânea
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : styles.atTop}`}
      >
        <div className={styles.logoWrapper}>
          <HiTerminal className={styles.logoIcon} />
          <span className={styles.logo}>Niuan.dev</span>
        </div>

        <div className={styles.menu}>
          <a href="#projects" className={styles.navLink}>
            Projetos
          </a>

          <button
            className={styles.themeToggleBtn}
            onClick={() => setIsThemeModalOpen(true)}
            aria-label="Mudar tema"
          >
            <HiOutlineColorSwatch className={styles.themeIcon} />
            <span>Tema</span>
          </button>
        </div>
      </nav>

      {/* Modal de seleção de temas */}
      <ThemeSelect
        forceOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </>
  );
};
