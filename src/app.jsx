import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Hello from React!</h1>
      <img className="react-logo" src="./react-logo.svg" alt="React Logo" />
      <p className="getting-started">
        Get started by editing <code>src/app.jsx</code>
      </p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
