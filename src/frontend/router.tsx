import { createBrowserRouter } from "react-router-dom";
import { Home, About, APITestPage, NotFound } from "./pages";
import { WebsiteLayout } from "./layouts/WebsiteLayout";

/**
 * Configuración de rutas de la aplicación
 *
 * Usa WebsiteLayout para tener una navegación persistente en todas las páginas.
 * Si prefieres rutas sin layout (como en el ejemplo anterior),
 * simplemente elimina el elemento WebsiteLayout y mueve las rutas al nivel raíz.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "api-test",
        element: <APITestPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
