import AlgorithmsPage from "./pages/AlgorithmsPage";
import Submissions from "./components/Submissions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/scss/styles.scss";
import "./assets/scss/pages/_algorithms-page.scss";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { wrappedComponents } from "./components/index";
import ProblemDetails from "./components/ProblemDetails";
import Discussion from "./components/Discussion";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  return (
    <Router>
      <div className="App dark-mode">
        <Routes>
          <Route
            exact
            path="/"
            element={<wrappedComponents.ProtectedAlgorithmsPage />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/logout"
            element={<wrappedComponents.AuthenticatedLogout />}
          />
          <Route
            exact
            path="/problems"
            element={<wrappedComponents.ProtectedAlgorithmsPage />}
          />
          <Route
            exact
            path="/problems/:id"
            element={<wrappedComponents.ProtectedProblemPage />}
          >
            <Route
              exact
              path="/problems/:id"
              element={<ProblemDetails />}
            ></Route>
            <Route exact path="submissions" element={<Submissions />} />
            <Route exact path="discussion" element={<Discussion />} />
          </Route>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
