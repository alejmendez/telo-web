
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  );
}
