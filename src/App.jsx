import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { useEffect } from "react";

/**
 * @typedef {import("react").HTMLProps & import("react").HTMLAttributes} JSXProps
 */
function App() {
  useEffect(() => {
    if (
      localStorage.getItem("dark") !== "false" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
