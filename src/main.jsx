import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import { CounterHistoryProvider } from "./contexts/CounterHistoryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterHistoryProvider>
      <App />
    </CounterHistoryProvider>
  </StrictMode>
);
