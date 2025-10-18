import { APITester } from "../APITester";

export function APITestPage() {
  return (
    <div className="page">
      <h1>Prueba de API</h1>
      <p>Prueba las rutas de la API del backend</p>

      <APITester />
    </div>
  );
}
