// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
//import BloodPressurePage from "./pages/Blood Pressure/bloodPressurePage";
//import BloodSugarPage from "./pages/Blood Sugar/bloodSugarPage";
//import FoodPage from "./pages/Food/foodPage"
//import HeartRatePage from "./pages/Heart Rate/heartRatePage"
//import MedicationsPage from "./pages/Medications/MedicationsPage"
//import WeightPage from "./pages/Weight/weightPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
//  const[bloodPressure, setBloodPressure] = useState([]);
//  const[bloodSugar, setBloodSugar] = useState([]);
//  const[food, setFood] = useState([]);
//  const[heartRate, setHeartRate] = useState([]);
//  const[medications, setMedications] = useState([]);
//  const[weight, setWeight] = useState([]);

//  useEffect(() => {
//      getAllBloodPressure(); 
//      getAllBloodSugar(); 
//      getAllFood(); 
//      getAllHeartRate(); 
//      getAllMedications(); 
//      getAllWeight(); 
//  }, []);

//  async function getAllBloodPressure(){
//      const response = await axios.get('http://127.0.0.1:8000/api/BP/')
//      setBloodPressure(response.data)
//      console.log(response.data)
//  }

 // async function getAllBloodSugar(){
 //     const response = await axios.get('http://127.0.0.1:8000/api/BS/')
 //     setBloodSugar(response.data)
 //     console.log(response.data)
 // }

  //async function getAllFood(){
  //    const response = await axios.get('http://127.0.0.1:8000/api/food/')
  //    setFood(response.data)
  //    console.log(response.data)
 // }

  //async function getAllHeartRate(){
  //    const response = await axios.get('http://127.0.0.1:8000/api/HR/')
  //    setHeartRate(response.data)
  //    console.log(response.data)
 // }

  //async function getAllMedications(){
  //    const response = await axios.get('http://127.0.0.1:8000/api/meds/')
  //    setMedications(response.data)
   //   console.log(response.data)
  //}

  //async function getAllWeight(){
  //    const response = await axios.get('http://127.0.0.1:8000/api/weight/')
  //    setWeight(response.data)
  //    console.log(response.data)
 // }
  
  
  
 //<Route path="/food" element={<FoodPage />} />
 //<Route path="/medications" element={<MedicationsPage />} />
 //<Route path="/blood pressure" element={<BloodPressurePage />} />
 //<Route path="/blood sugar" element={<BloodSugarPage />} />
 //<Route path="/heart rate" element={<HeartRatePage />} />
 //<Route path="/weight" element={<WeightPage />} />
  
  
  
  
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
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
