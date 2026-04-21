import { ThemeProvider } from "./context/ThemeContext";
import { ProjectProvider } from "./context/ProjectContext";
import { Navbar } from "./components/layout/Navbar/Navbar"; // Removido .tsx (padrão)
import { Outlet } from "react-router-dom";
import { Footer } from "./components/layout/Footer/Footer";
import { FaviconHandler } from "./components/Favicon/FaviconHandler";

function App() {
  return (
    <ThemeProvider>
      <FaviconHandler />
      <ProjectProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
