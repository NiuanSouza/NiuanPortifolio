import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { ProjectProvider } from "./context/ProjectContext";
import { Navbar } from "./components/layout/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/layout/Footer/Footer.tsx";
import { FaviconHandler } from "./components/Favicon/FaviconHandler.tsx";

function ThemeWrapper() {
  const { theme } = useTheme();
  return <FaviconHandler theme={theme} />;
}

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper />
      <ProjectProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
