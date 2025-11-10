import { BrowserRouter } from "react-router";
import { HomePage } from "./pages/home";

/**
 * @typedef {import("react").HTMLProps & import("react").HTMLAttributes} JSXProps
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
