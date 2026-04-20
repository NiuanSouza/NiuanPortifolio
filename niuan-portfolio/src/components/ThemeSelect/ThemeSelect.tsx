import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import { THEMES } from "../../context/themes";
import { HiOutlineColorSwatch, HiX, HiSearch } from "react-icons/hi";
import styles from "./ThemeSelect.module.css";

interface ThemeSelectProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const ThemeSelect: React.FC<ThemeSelectProps> = ({
  forceOpen,
  onClose,
}) => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const hasSelectedTheme = localStorage.getItem("theme-selected");
    if (!hasSelectedTheme || forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  const filteredThemes = useMemo(() => {
    return THEMES.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleSelectTheme = (themeId: string) => {
    setTheme(themeId);
    localStorage.setItem("theme-selected", "true");
    if (!forceOpen) setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <HiOutlineColorSwatch className={styles.icon} />
            <h2>Escolha seu Tema</h2>
          </div>
          {forceOpen && (
            <button className={styles.closeBtn} onClick={handleClose}>
              <HiX size={24} />
            </button>
          )}
        </div>

        <div className={styles.searchWrapper}>
          <HiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Procurar tema..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.scrollArea}>
          <div className={styles.grid}>
            {filteredThemes.map((t) => (
              <button
                key={t.id}
                className={`${styles.themeCard} ${theme === t.id ? styles.active : ""}`}
                onClick={() => handleSelectTheme(t.id)}
                style={
                  {
                    "--accent-color": t.colors["--accent"],
                  } as React.CSSProperties
                }
              >
                <div
                  className={styles.preview}
                  style={{ backgroundColor: t.colors["--bg-main"] }}
                >
                  <div
                    className={styles.dot}
                    style={{ backgroundColor: t.colors["--accent"] }}
                  />
                </div>
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {!forceOpen && (
          <button
            className={styles.confirmBtn}
            onClick={() => {
              localStorage.setItem("theme-selected", "true");
              setIsVisible(false);
            }}
          >
            Começar a explorar
          </button>
        )}
      </div>
    </div>
  );
};
