import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "./pages";
import { MainLayout } from "./layouts/MainLayout.tsx";

/**
 * Configuración de rutas de la aplicación
 *
 * Usa MainLayout para tener una navegación persistente en todas las páginas.
 * Si prefieres rutas sin layout (como en el ejemplo anterior),
 * simplemente elimina el elemento MainLayout y mueve las rutas al nivel raíz.
 */
export const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
