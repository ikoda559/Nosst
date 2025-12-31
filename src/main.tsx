
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  //Creates a root and says take the App froom App.tsx and render it in the index.html root
  createRoot(document.getElementById("root")!).render(<App />); 