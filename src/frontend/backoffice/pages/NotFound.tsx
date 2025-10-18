import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>

      <button
        onClick={() => navigate("/")}
        className="send-button"
        style={{ marginTop: "2rem" }}
      >
        ← Volver al inicio
      </button>
    </div>
  );
}
