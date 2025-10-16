import { Link, Outlet, useLocation } from "react-router-dom";

/**
 * Layout principal con navegación persistente
 * El componente <Outlet /> renderiza las rutas hijas
 */
export function MainLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="layout">
      <header className="header">
        <nav className="main-nav">
          <Link
            to="/"
            className={`nav-item ${isActive("/") ? "active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className={`nav-item ${isActive("/about") ? "active" : ""}`}
          >
            Acerca de
          </Link>
          <Link
            to="/api-test"
            className={`nav-item ${isActive("/api-test") ? "active" : ""}`}
          >
            API Test
          </Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Bun + React + React Router © 2025</p>
      </footer>
    </div>
  );
}
