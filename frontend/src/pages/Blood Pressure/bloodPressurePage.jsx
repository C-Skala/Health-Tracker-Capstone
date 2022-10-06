import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    systolic: "",
    diastolic: "",
    date:"",
    time:"",
    comments:"",

};


const BloodPressurePage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewBP)


  async function postNewBP(){
    const response = await axios.post('http://127.0.0.1:8000/api/BP/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  
   function refreshPage() {
    window.location.reload(false);
  } 
  
  
  
  
  
  return ( 
      <div>
        <div>
          <table className = 'table'>
            <thead>
              <tr>
                <th>Systolic</th>
                <th>Diastolic</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
              <tbody>
                {props.parentBloodPressure.map((bloodPressure, index) => {
                return(
                <tr key={index}>
                  <td>{bloodPressure.systolic}</td>
                  <td>{bloodPressure.diastolic}</td>
                  <td>{bloodPressure.date}</td>
                  <td>{bloodPressure.time}</td>
                </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Systolic:{" "}</label>
                  <input type = 'number' name = 'systolic' value = {formData.systolic} onChange = {handleInputChange}/>
                <label>Diastolic:{" "}</label>
                  <input type = 'number' name = 'diastolic' value = {formData.diastolic} onChange = {handleInputChange}/>
                <label>Date:{" "}</label>
                  <input type = 'date' name = 'date' value = {formData.date} onChange = {handleInputChange}/>
                <label>Time:{" "}</label>
                  <input type = 'time' name = 'time' value = {formData.time} onChange = {handleInputChange}/>
                <label>comments:{" "}</label>
                  <input type = "text" name = 'comments' value = {formData.comments} onChange = {handleInputChange}/>
                <button onClick={refreshPage}>submit</button>
            </form>
        </div> 
      </div>
        
     );
}
 
export default BloodPressurePage;