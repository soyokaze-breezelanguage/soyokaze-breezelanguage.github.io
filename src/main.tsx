import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/soyokaze-breezelanguage.github.io">
      <MantineProvider>
        <App />
      </MantineProvider>
    </Router>
  </StrictMode>
);
