import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { FooterPage } from "../components/FooterPage";

/**
 * Layout principal con navegación persistente
 * El componente <Outlet /> renderiza las rutas hijas
 */
export function MainLayout() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Cargar el estado del modo oscuro desde localStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Botón toggle para modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:bg-accent/50 transition-all duration-300 group"
        aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Moon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
        )}
      </button>

      <Outlet />
      <FooterPage />
    </div>
  );
}
