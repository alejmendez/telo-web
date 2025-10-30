import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';

import { router } from "./router";
import "./index.css";

const primeReactOptions = {
  locale: "es",
};

export function App() {
  return (
    <div className="app">
      <PrimeReactProvider value={primeReactOptions}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
