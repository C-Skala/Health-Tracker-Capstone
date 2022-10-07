// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BloodPressurePage from "./pages/Blood Pressure/BloodPressurePage";
import BloodSugarPage from "./pages/Blood Sugar/bloodSugarPage";
import FoodPage from "./pages/Food/foodPage"
import HeartRatePage from "./pages/Heart Rate/heartRatePage"
import MedicationsPage from "./pages/Medications/MedicationsPage"
import WeightPage from "./pages/Weight/weightPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import useAuth from "./hooks/useAuth";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();
  const[bloodPressure, setBloodPressure] = useState([]);
  const[bloodSugar, setBloodSugar] = useState([]);
  const[food, setFood] = useState([]);
  const[heartRate, setHeartRate] = useState([]);
  const[medications, setMedications] = useState([]);
  const[weight, setWeight] = useState([]);

  useEffect(() => {
    async function getAllBloodPressure(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/BP/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setBloodPressure(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllBloodPressure();
  }, [token]);


  useEffect(() => {
    async function getAllBloodSugar(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/BS/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setBloodSugar(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllBloodSugar();
  }, [token]);


  useEffect(() => {
    async function getAllFood(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/food/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setFood(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllFood();
  }, [token]);


  useEffect(() => {
    async function getAllHeartRate(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/HR/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setHeartRate(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllHeartRate();
  }, [token]);


  useEffect(() => {
    async function getAllMedications(){
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/meds/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setMedications(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllMedications();
  }, [token]);


  useEffect(() => {
    async function getAllWeight(){
        let response = await axios.get('http://127.0.0.1:8000/api/Weight/', {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setWeight(response.data);
        console.log(response.data);
    };
    getAllWeight();
  }, [token]);

 
  
  
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
        <Route path="/weight" element={<PrivateRoute><WeightPage parentWeight = {weight} /></PrivateRoute>} />
        <Route path="/BP" element={<PrivateRoute><BloodPressurePage parentBloodPressure = {bloodPressure} /></PrivateRoute>} />
        <Route path="/medications" element={<PrivateRoute><MedicationsPage parentMedications = {medications}/></PrivateRoute>} />
        <Route path="/food" element={<PrivateRoute><FoodPage parentFood = {food}/></PrivateRoute>} />
        <Route path="/BS" element={<PrivateRoute><BloodSugarPage parentBloodSugar = {bloodSugar}/></PrivateRoute>} />
        <Route path="/HR" element={<PrivateRoute><HeartRatePage parentHeartRate = {heartRate}/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
