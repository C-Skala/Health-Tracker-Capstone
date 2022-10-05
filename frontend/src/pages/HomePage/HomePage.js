import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
 // const[bloodPressure, setBloodPressure] = useState([]);
 // const[bloodSugar, setBloodSugar] = useState([]);
 // const[food, setFood] = useState([]);
 // const[heartRate, setHeartRate] = useState([]);
 // const[medications, setMedications] = useState([]);
 // const[weight, setWeight] = useState([]);


  //useEffect(() => {
  //  async function getAllBloodPressure(){
  //    try {
  //      let response = await axios.get('http://127.0.0.1:8000/api/BP/', {
  //        headers: {
  //          Authorization: "Bearer " + token,
  //        },
  //      });
  //      setBloodPressure(response.data)
  //      console.log(response.data)
  //    } catch (error) {
  //      console.log(error.response.data);
  //    }
  //  };
  //  getAllBloodPressure();
  //}, [token]);


  //useEffect(() => {
   // async function getAllBloodSugar(){
   //   try {
   //     let response = await axios.get('http://127.0.0.1:8000/api/BS/', {
   //       headers: {
   //         Authorization: "Bearer " + token,
   //       },
   //     });
   //     setBloodSugar(response.data);
   //     console.log(response.data);
   //   } catch (error) {
   //     console.log(error.response.data);
   //   }
   // };
   // getAllBloodSugar();
  //}, [token]);


  //useEffect(() => {
  //  async function getAllFood(){
  //    try {
  //      let response = await axios.get('http://127.0.0.1:8000/api/food/', {
  //        headers: {
  //          Authorization: "Bearer " + token,
  //        },
  //      });
  //      setFood(response.data);
  //      console.log(response.data);
  //    } catch (error) {
  //      console.log(error.response.data);
  //    }
  //  };
  //  getAllFood();
  //}, [token]);


  //useEffect(() => {
  //  async function getAllHeartRate(){
  //    try {
   //     let response = await axios.get('http://127.0.0.1:8000/api/HR/', {
   //       headers: {
   //         Authorization: "Bearer " + token,
   //       },
   //     });
   //     setHeartRate(response.data);
   //     console.log(response.data);
   //   } catch (error) {
    //    console.log(error.response.data);
    //  }
  //  };
   // getAllHeartRate();
  //}, [token]);


  //useEffect(() => {
  //  async function getAllMedications(){
  //    try {
  //      let response = await axios.get('http://127.0.0.1:8000/api/meds/', {
  //        headers: {
  //          Authorization: "Bearer " + token,
  //        },
  //      });
  //      setMedications(response.data);
  //      console.log(response.data);
  //    } catch (error) {
  //      console.log(error.response.data);
  //    }
  //  };
  //  getAllMedications();
  //}, [token]);


  //useEffect(() => {
  //  async function getAllWeight(){
  //    try {
  //      let response = await axios.get('http://127.0.0.1:8000/api/Weight/', {
  //        headers: {
  //          Authorization: "Bearer " + token,
  //        },
  //      });
  //      setWeight(response.data);
  //      console.log(response.data);
  //    } catch (error) {
   //     console.log(error.response.data);
   //   }
   // };
   // getAllWeight();
  //}, [token]);




  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
    </div>
  );
};

export default HomePage;
