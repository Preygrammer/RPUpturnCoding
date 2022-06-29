import AlgorithmsPage from "./pages/AlgorithmsPage";
import ProblemsPage from "./pages/ProblemPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import AlertTemplate from "react-alert-template-basic";

import "./assets/scss/styles.scss";
import "./assets/scss/pages/_algorithms-page.scss";

export default function App() {
  return (
    <Router>
      <div className="App dark-mode">
        <Routes>
          <Route exact path="/problems" element={<AlgorithmsPage />} />
          <Route exact path="/problems/:id" element={<ProblemsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
