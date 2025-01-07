import { createRoot } from 'react-dom/client';
import App from "./app/App";
import React from "react";

const container = document.getElementById('app');
if (!container) {
  throw new Error("Root container 'app' not found");
}
const root = createRoot(container);

root.render(<App/>)
