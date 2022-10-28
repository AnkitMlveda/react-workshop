import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// import App from "./App";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

// const queryclient = new QueryClient({
//   defaultOptions:{
//     queries:{
//       staleTime:Infinity,
//       suspense: true,
//       useErrorBoundary: true
//     }
//   }
// });

ReactDOM.render(
  <React.StrictMode>
     {/* <QueryClientProvider client={queryclient}>
    <App />
    </QueryClientProvider> */}
    <BrowserRouter>
    <Navbar/>
    <Router/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

