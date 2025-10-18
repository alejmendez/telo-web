import { Outlet } from "react-router-dom";

import { FooterPage } from "../components/website/FooterPage";
import { ToggleDarkMode } from "../components/website/ToggleDarkMode";

/**
 * Layout principal con navegación persistente
 * El componente <Outlet /> renderiza las rutas hijas
 */
export function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <ToggleDarkMode />
      <Outlet />
      <FooterPage />
    </div>
  );
}
