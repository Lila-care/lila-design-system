import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@sketch/App.tsx";
import "@sketch/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
