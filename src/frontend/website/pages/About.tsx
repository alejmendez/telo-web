export function About() {
  return (
    <div className="page">
      <h1>Acerca de</h1>
      <p>
        Esta es una aplicación de ejemplo construida con Bun, React y React Router.
      </p>

      <div className="info-card">
        <h2>Tecnologías utilizadas:</h2>
        <ul>
          <li>🚀 <strong>Bun</strong> - Runtime y bundler ultrarrápido</li>
          <li>⚛️ <strong>React 19</strong> - Biblioteca de UI</li>
          <li>🛣️ <strong>React Router</strong> - Sistema de rutas</li>
          <li>🎨 <strong>Tailwind CSS</strong> - Framework de estilos</li>
        </ul>
      </div>

      <div className="info-card">
        <h2>Características:</h2>
        <ul>
          <li>✨ Hot Module Replacement (HMR)</li>
          <li>🔄 Navegación del lado del cliente</li>
          <li>📱 Diseño responsive</li>
          <li>🎯 Layout con navegación persistente</li>
        </ul>
      </div>
    </div>
  );
}
