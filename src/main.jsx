import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer, Bounce } from "react-toastify";
import App from "./App.jsx";
import SoundProvider from "@/contexts/sound/Provider";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SoundProvider>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
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
