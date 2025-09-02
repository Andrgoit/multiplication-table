import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer, Bounce } from "react-toastify";
import App from "./App.jsx";
import SoundProvider from "@/contexts/sound/Provider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SoundProvider>
      <App />
    </SoundProvider>
    <ToastContainer
      position="top-center"
      autoClose={500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
  </BrowserRouter>
);
