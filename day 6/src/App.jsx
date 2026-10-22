
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./data/Navbar.jsx";
import {
  ThemeProvider,
  useTheme,
} from "./context/ThemeContext.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";

function PortfolioLayout() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const navigation =
      performance.getEntriesByType("navigation")[0];

    // Redirect to Home only when the browser is refreshed
    if (
      navigation?.type === "reload" &&
      window.location.pathname !== "/"
    ) {
      navigate("/", { replace: true });
    }
  }, []); // Run only on initial mount

  return (
    <div className="app" data-theme={theme}>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Avinash C. | Built with React</p>
        <p>Learning, building, and improving every day.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PortfolioLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
