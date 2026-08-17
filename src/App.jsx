import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            HOME
        ====================================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =====================================================
            ALL PROJECTS
        ====================================================== */}

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />


        {/* =====================================================
            PROJECT DETAILS
        ====================================================== */}

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;