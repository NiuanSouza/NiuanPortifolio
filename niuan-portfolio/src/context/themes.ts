export interface ThemePalette {
  id: string;
  name: string;
  colors: {
    "--bg-main": string;
    "--bg-card": string;
    "--bg-nav": string;
    "--text-title": string;
    "--text-body": string;
    "--accent": string;
    "--btn-text": string;
    "--border": string;
  };
}

export const THEMES: ThemePalette[] = [
  {
    id: "dracula",
    name: "Dracula",
    colors: {
      "--bg-main": "#282a36",
      "--bg-card": "#44475a",
      "--bg-nav": "rgba(40, 42, 54, 0.9)",
      "--text-title": "#bd93f9",
      "--text-body": "#f8f8f2",
      "--accent": "#ff79c6",
      "--btn-text": "#282a36",
      "--border": "#6272a4",
    },
  },
  {
    id: "one-dark",
    name: "One Dark",
    colors: {
      "--bg-main": "#282c34",
      "--bg-card": "#21252b",
      "--bg-nav": "rgba(40, 44, 52, 0.9)",
      "--text-title": "#e06c75",
      "--text-body": "#abb2bf",
      "--accent": "#61afef",
      "--btn-text": "#282c34",
      "--border": "#3e4451",
    },
  },
  {
    id: "nord",
    name: "Nord",
    colors: {
      "--bg-main": "#2e3440",
      "--bg-card": "#3b4252",
      "--bg-nav": "rgba(46, 52, 64, 0.9)",
      "--text-title": "#88c0d0",
      "--text-body": "#d8dee9",
      "--accent": "#81a1c1",
      "--btn-text": "#2e3440",
      "--border": "#4c566a",
    },
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    colors: {
      "--bg-main": "#282828",
      "--bg-card": "#3c3836",
      "--bg-nav": "rgba(40, 40, 40, 0.9)",
      "--text-title": "#fabd2f",
      "--text-body": "#ebdbb2",
      "--accent": "#fe8019",
      "--btn-text": "#282828",
      "--border": "#504945",
    },
  },
  {
    id: "monokai",
    name: "Monokai",
    colors: {
      "--bg-main": "#272822",
      "--bg-card": "#3e3d32",
      "--bg-nav": "rgba(39, 40, 34, 0.9)",
      "--text-title": "#f92672",
      "--text-body": "#f8f8f2",
      "--accent": "#a6e22e",
      "--btn-text": "#272822",
      "--border": "#49483e",
    },
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    colors: {
      "--bg-main": "#0d1117",
      "--bg-card": "#161b22",
      "--bg-nav": "rgba(13, 17, 23, 0.9)",
      "--text-title": "#58a6ff",
      "--text-body": "#c9d1d9",
      "--accent": "#1f6feb",
      "--btn-text": "#ffffff",
      "--border": "#30363d",
    },
  },
  {
    id: "night-owl",
    name: "Night Owl",
    colors: {
      "--bg-main": "#011627",
      "--bg-card": "#0b2942",
      "--bg-nav": "rgba(1, 22, 39, 0.9)",
      "--text-title": "#82aaff",
      "--text-body": "#d6deeb",
      "--accent": "#ecc48d",
      "--btn-text": "#011627",
      "--border": "#1d3b53",
    },
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    colors: {
      "--bg-main": "#1a1b26",
      "--bg-card": "#24283b",
      "--bg-nav": "rgba(26, 27, 38, 0.9)",
      "--text-title": "#7aa2f7",
      "--text-body": "#cfc9c2",
      "--accent": "#bb9af7",
      "--btn-text": "#1a1b26",
      "--border": "#414868",
    },
  },
  {
    id: "synthwave",
    name: "Synthwave '84",
    colors: {
      "--bg-main": "#262335",
      "--bg-card": "#241b30",
      "--bg-nav": "rgba(38, 35, 53, 0.9)",
      "--text-title": "#ff7edb",
      "--text-body": "#ffffff",
      "--accent": "#f97e72",
      "--btn-text": "#262335",
      "--border": "#4d466e",
    },
  },
  {
    id: "light-ocean",
    name: "Ocean Light",
    colors: {
      "--bg-main": "#f0f4f8",
      "--bg-card": "#ffffff",
      "--bg-nav": "rgba(240, 244, 248, 0.9)",
      "--text-title": "#0070f3",
      "--text-body": "#102a43",
      "--accent": "#0070f3",
      "--btn-text": "#ffffff",
      "--border": "#d9e2ec",
    },
  },
];
