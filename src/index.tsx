import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from "./common/wagmi.config.ts";
import Earn from './pages/Earn.jsx';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <WagmiConfig config={wagmiConfig}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </WagmiConfig>
);
