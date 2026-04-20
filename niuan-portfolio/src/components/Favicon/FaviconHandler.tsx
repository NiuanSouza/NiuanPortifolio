import { useEffect } from "react";

export const FaviconHandler = ({ theme }: { theme: string }) => {
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const textColor =
      rootStyles.getPropertyValue("--text-title").trim() || "#000000";

    const styleId = "favicon-theme-style";
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }

    style.innerHTML = `
      #favicon-svg {
        --fav-text: ${textColor};
      }
    `;
  }, [theme]);

  return null;
};
