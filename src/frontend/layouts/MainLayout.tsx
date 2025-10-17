import { Link, Outlet, useLocation } from "react-router-dom";

import { FooterPage } from "../components/FooterPage";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Outlet />
      <FooterPage />
    </div>
  );
}
