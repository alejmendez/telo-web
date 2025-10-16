# 🛣️ Guía del Sistema de Rutas React Router

## 📋 Contenido

- [Instalación](#instalación)
- [Estructura de archivos](#estructura-de-archivos)
- [Uso básico](#uso-básico)
- [Navegación](#navegación)
- [Rutas dinámicas](#rutas-dinámicas)
- [Layouts](#layouts)
- [Ejemplos avanzados](#ejemplos-avanzados)

## 🚀 Instalación

El proyecto ya tiene React Router instalado. Si necesitas instalarlo en otro proyecto:

```bash
bun add react-router-dom
```

## 📁 Estructura de archivos

```
src/frontend/
├── App.tsx                 # Componente principal con RouterProvider
├── router.tsx             # Configuración de rutas
├── router.examples.tsx    # Ejemplos de configuraciones (referencia)
├── pages/                 # Páginas de la aplicación
│   ├── index.ts          # Exportaciones centralizadas
│   ├── Home.tsx
│   ├── About.tsx
│   ├── APITestPage.tsx
│   └── NotFound.tsx
└── layouts/              # Layouts compartidos
    └── MainLayout.tsx    # Layout con navegación persistente
```

## 🎯 Uso básico

### 1. Definir rutas

Edita `src/frontend/router.tsx`:

```tsx
import { createBrowserRouter } from "react-router-dom";
import { Home, About } from "./pages";
import { MainLayout } from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
```

### 2. Crear una nueva página

Crea un archivo en `src/frontend/pages/`:

```tsx
// src/frontend/pages/Contact.tsx
export function Contact() {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <p>Página de contacto</p>
    </div>
  );
}
```

### 3. Agregar la página al router

```tsx
// src/frontend/router.tsx
import { Contact } from "./pages/Contact";

// ... en las rutas:
{ path: "contact", element: <Contact /> }
```

### 4. Exportar desde index.ts

```tsx
// src/frontend/pages/index.ts
export { Contact } from "./Contact";
```

## 🔗 Navegación

### Usando Link

```tsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
}
```

### Usando NavLink (con estado activo)

```tsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Inicio
      </NavLink>
    </nav>
  );
}
```

### Navegación programática

```tsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");           // Ir a una ruta
    navigate(-1);                 // Volver atrás
    navigate("/", { replace: true }); // Reemplazar historial
  };

  return <button onClick={handleClick}>Ir a About</button>;
}
```

## 🎨 Rutas dinámicas

### Definir ruta con parámetros

```tsx
// En router.tsx
{
  path: "users/:userId",
  element: <UserProfile />
}
```

### Usar parámetros en el componente

```tsx
import { useParams } from "react-router-dom";

export function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Perfil del usuario: {userId}</h1>
    </div>
  );
}
```

### Navegar a rutas dinámicas

```tsx
<Link to={`/users/${userId}`}>Ver perfil</Link>

// O programáticamente:
navigate(`/users/${userId}`);
```

## 📐 Layouts

Los layouts permiten tener elementos compartidos (como navegación) en múltiples páginas.

### Crear un Layout

```tsx
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="layout">
      <header>
        <nav>{/* Navegación */}</nav>
      </header>

      <main>
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}
```

### Usar el Layout en las rutas

```tsx
{
  path: "/",
  element: <MainLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
  ],
}
```

## 🚀 Ejemplos avanzados

### Query Parameters

```tsx
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <input
        value={query || ""}
        onChange={(e) => setSearchParams({ q: e.target.value })}
      />
    </div>
  );
}
```

### Rutas protegidas

```tsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Tu lógica aquí

  return isAuthenticated ? children : <Navigate to="/login" />;
}

// En el router:
{
  path: "dashboard",
  element: <ProtectedRoute><Dashboard /></ProtectedRoute>
}
```

### Lazy Loading

```tsx
import { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("./pages/About"));

// En el router:
{
  path: "about",
  element: (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyAbout />
    </Suspense>
  )
}
```

### Redirecciones

```tsx
import { Navigate } from "react-router-dom";

// En el router:
{
  path: "old-path",
  element: <Navigate to="/new-path" replace />
}
```

### Obtener información de la ubicación actual

```tsx
import { useLocation } from "react-router-dom";

function CurrentPath() {
  const location = useLocation();

  return (
    <div>
      <p>Path: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>State: {JSON.stringify(location.state)}</p>
    </div>
  );
}
```

## 📚 Recursos adicionales

- [Documentación oficial de React Router](https://reactrouter.com/)
- [Archivo de ejemplos](src/frontend/router.examples.tsx) - Más ejemplos en el código

## 🎯 Comandos útiles

```bash
# Iniciar servidor de desarrollo
bun run dev

# Construir para producción
bun run build

# Iniciar en producción
bun run start
```

---

✨ **¡Feliz navegación!** Si tienes dudas, revisa el archivo `router.examples.tsx` para más ejemplos.
