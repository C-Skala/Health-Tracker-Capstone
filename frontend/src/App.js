// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import bloodPressurePage from "./pages/Blood Pressure/bloodPressurePage";
import bloodSugarPage from "./pages/Blood Sugar/bloodSugarPage";
import foodPage from "./pages/Food/foodPage"
import heartRatePage from "./pages/Heart Rate/heartRatePage"
import medicationsPage from "./pages/Medications/MedicationsPage"
import weightPage from "./pages/Weight/weightPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/food" element={<foodPage />} />
        <Route path="/medications" element={<medicationsPage />} />
        <Route path="/blood pressure" element={<bloodPressurePage />} />
        <Route path="/blood sugar" element={<bloodSugarPage />} />
        <Route path="/heart rate" element={<heartRatePage />} />
        <Route path="/weight" element={<weightPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
