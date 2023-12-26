import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from "./common/wagmi.config.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <WagmiConfig config={wagmiConfig}>
    <React.StrictMode>
    
        <App />
    
      ,
    </React.StrictMode>
  </WagmiConfig>
);
