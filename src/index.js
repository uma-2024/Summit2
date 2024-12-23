import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

const PROJECT_ID = "cfc151ab35f57dcbbfa0c49e51a845aa";

const metadata = {
  name: "Summit",
  description: "A Summit web app",
  url: "http://localhost:3000/launchpad",
  icons: ["https://defi.com/icon.png"],
};

const chains = [bscTestnet];

const config = defaultWagmiConfig({
  autoConnect: true,
  chains,
  projectId: PROJECT_ID,
  metadata,
});

createWeb3Modal({
  projectId: PROJECT_ID,
  wagmiConfig: config,
  chains,
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </QueryClientProvider>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiConfig } from "wagmi";
// import { bscTestnet } from "wagmi/chains";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

// // Project configuration for Web3Modal
// const PROJECT_ID = "cfc151ab35f57dcbbfa0c49e51a845aa";

// const metadata = {
//   name: "Summit",
//   description: "A Summit web app",
//   url: "https://ysn-seven.vercel.app/",
//   icons: ["https://defi.com/icon.png"],
// };

// // Configure chains and providers
// const chains = [bscTestnet];

// const config = defaultWagmiConfig({
//   chains,
//   projectId: PROJECT_ID,
//   metadata,
// });

// // Query client for React Query
// const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <QueryClientProvider client={queryClient}>
//     <WagmiConfig config={config}>
//       <App />
//     </WagmiConfig>
//   </QueryClientProvider>
// );

// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { WalletProvider } from "./components/WalletContext";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiConfig } from "wagmi";
// import { bscTestnet } from "wagmi/chains";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
// // WAGMI configuration
// const PROJECT_ID = "cfc151ab35f57dcbbfa0c49e51a845aa";
// // const metadata = {
// //   name: "YSN",
// //   description: "A YSN web app",
// //   url: "https://ysn-seven.vercel.app/",
// //   icons: ["https://defi.com/icon.png"],
// // };
// const chains = [bscTestnet];
// const config = defaultWagmiConfig({
//   chains,
//   projectId: PROJECT_ID,
//   metadata,
// });

// const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <QueryClientProvider client={queryClient}>
//   <WagmiConfig config={config}>
//     <WalletProvider>
//     <App />
//     </WalletProvider>
//       </WagmiConfig>
//     </QueryClientProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
