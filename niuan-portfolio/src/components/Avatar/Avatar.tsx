import React, { useMemo } from "react";
import tinycolor from "tinycolor2";
import { THEMES } from "../../context/themes";
import { useTheme } from "../../context/ThemeContext";
import { AvatarModel, AvatarColors } from "./AvatarModel";
import styles from "./Avatar.module.css";

export const AVATAR_COLORS: AvatarColors = {
  skinshadow4: "#b07057",
  background: "#c9d6de",
  computerBody: "#415161",
  neutralDeep: "#121415",
  surfaceMain: "#606d7c",
  hairMedium: "#724732",
  shirtMain: "#3ab5eb",
  skinLight: "#fbcfa1",
  hairDark: "#513122",
  keyboardGrey: "#8a96a4",
  skinShadow1: "#e0a37a",
  skinMedium: "#f5c8a6",
  shirtShadow1: "#2595c6",
  skinPale: "#fbce9f",
  skinShadow2: "#af775e",
  shirtShadow2: "#2794c3",
  skinHighlight: "#fbbb8d",
  shadowSoft: "#c5a59a",
  shirtShadow3: "#278cb9",
  computerGrey1: "#3f4f5d",
  computerGrey2: "#3d4d5d",
  brownDeep: "#442013",
  skinUltraLight: "#fce1c3",
  skinShadow3: "#d99f7e",
  shirtShadow4: "#3190bc",
  brownReddish: "#6c3b2b",
  brownGrey: "#896252",
  skinShadow4: "#dfa27b",
  shirtHighlight: "#37aadd",
  keyboardMedium: "#5f6d7c",
  brownDark2: "#4f2e1e",
  brownDark3: "#532f1f",
  computerSilver: "#c5cfd7",
};

export const Avatar: React.FC = () => {
  const { theme } = useTheme();

  const dynamicPalette = useMemo((): AvatarColors => {
    const selectedTheme = THEMES?.find((t) => t.id === theme) || THEMES[0];
    const accentColor = selectedTheme.colors["--accent"];
    const bgColor = selectedTheme.colors["--bg-main"];

    const accent = tinycolor(accentColor);
    const bg = tinycolor(bgColor);

    let contour = tinycolor.mix("#050505", bgColor, 12).toHexString();

    if (bg.isLight()) {
      contour = "#0a0c0e";
    }

    return {
      ...AVATAR_COLORS,
      background: bgColor,
      neutralDeep: contour,
      shirtMain: accentColor,
      shirtHighlight: accent.clone().lighten(10).toHexString(),
      shirtShadow1: accent.clone().darken(8).toHexString(),
      shirtShadow2: accent.clone().darken(12).toHexString(),
      shirtShadow3: accent.clone().darken(18).toHexString(),
      shirtShadow4: accent.clone().darken(22).toHexString(),
      skinshadow4: AVATAR_COLORS.skinshadow4,
    };
  }, [theme]);
  return (
    <div className={styles.container}>
      <AvatarModel colors={dynamicPalette} />
    </div>
  );
};
