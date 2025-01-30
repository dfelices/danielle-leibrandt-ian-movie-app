import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/normalize.css";
import "./styles/base.css";
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
