/**
 * EJEMPLOS DE CONFIGURACIÓN DE RUTAS CON REACT ROUTER
 *
 * Este archivo contiene ejemplos de diferentes configuraciones de rutas
 * que puedes usar en tu aplicación. NO se está usando actualmente,
 * es solo para referencia.
 */

import { createBrowserRouter } from "react-router-dom";
import { Home, About, APITestPage, NotFound } from "./pages";
import { MainLayout } from "./layouts/MainLayout";

// ============================================
// EJEMPLO 1: Rutas sin Layout (más simple)
// ============================================
export const simpleRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/api-test",
    element: <APITestPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// ============================================
// EJEMPLO 2: Rutas con Layout (navegación persistente)
// ============================================
export const layoutRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Ruta por defecto del padre
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

// ============================================
// EJEMPLO 3: Rutas con parámetros dinámicos
// ============================================
/*
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <div>Perfil del usuario: {userId}</div>;
}

export const dynamicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users/:userId", element: <UserProfile /> },
      { path: "posts/:postId/comments/:commentId", element: <CommentDetail /> },
    ],
  },
]);
*/

// ============================================
// EJEMPLO 4: Rutas con carga perezosa (lazy loading)
// ============================================
/*
import { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("./pages/About"));

export const lazyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
]);
*/

// ============================================
// EJEMPLO 5: Rutas protegidas con autenticación
// ============================================
/*
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = false; // Tu lógica de autenticación aquí

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export const protectedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
*/

// ============================================
// EJEMPLO 6: Redirecciones
// ============================================
/*
import { Navigate } from "react-router-dom";

export const redirectRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "old-path", element: <Navigate to="/new-path" replace /> },
      { path: "new-path", element: <NewPage /> },
    ],
  },
]);
*/

// ============================================
// EJEMPLO 7: Navegación programática
// ============================================
/*
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navegar a una ruta
    navigate("/about");

    // Navegar con parámetros
    navigate("/users/123");

    // Navegar hacia atrás
    navigate(-1);

    // Navegar y reemplazar historial
    navigate("/home", { replace: true });

    // Navegar con estado
    navigate("/profile", { state: { from: "dashboard" } });
  };

  return <button onClick={handleClick}>Ir</button>;
}
*/

// ============================================
// EJEMPLO 8: Uso de Link para navegación
// ============================================
/*
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <!-- Link básico -->
      <Link to="/about">Acerca de</Link>

      <!-- Link con className condicional -->
      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Acerca de
      </NavLink>

      <!-- Link con estado -->
      <Link to="/profile" state={{ from: "nav" }}>
        Perfil
      </Link>
    </nav>
  );
}
*/

// ============================================
// EJEMPLO 9: Obtener información de la ruta actual
// ============================================
/*
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function CurrentRouteInfo() {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <p>Path: {location.pathname}</p>
      <p>Params: {JSON.stringify(params)}</p>
      <p>Query: {searchParams.get("q")}</p>
    </div>
  );
}
*/

// ============================================
// EJEMPLO 10: Rutas anidadas múltiples niveles
// ============================================
/*
export const nestedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "users", element: <AdminUsers /> },
          { path: "settings", element: <AdminSettings /> },
        ],
      },
    ],
  },
]);
*/
