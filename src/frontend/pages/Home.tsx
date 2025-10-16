import logo from "../logo.svg";
import reactLogo from "../react.svg";

export function Home() {
  return (
    <div className="page">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <h1>Bun + React + React Router</h1>
      <p>
        Edit <code>src/frontend/pages/Home.tsx</code> y guarda para probar HMR
      </p>

      <div className="info-card">
        <h2>¡Bienvenido! 🚀</h2>
        <p>
          Esta aplicación incluye un sistema de rutas completo con React Router.
          Usa la navegación superior para explorar las diferentes páginas.
        </p>
      </div>
    </div>
  );
}
