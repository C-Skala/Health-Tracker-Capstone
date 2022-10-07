import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    sugar: "",
    date:"",
    time:"",
    comments:"",

};


const BloodSugarPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewBS)


  async function postNewBS(){
    const response = await axios.post('http://127.0.0.1:8000/api/BS/', formData, {
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
                <th>sugar</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
              <tbody>
                {props.parentBloodSugar.map((bloodSugar, index) => {
                return(
                <tr key={index}>
                  <td>{bloodSugar.sugar}</td>
                  <td>{bloodSugar.date}</td>
                  <td>{bloodSugar.time}</td>
                </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Blood Sugar:{" "}</label>
                  <input type = 'number' name = 'heart_rate' value = {formData.heart_rate} onChange = {handleInputChange}/>
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
 
export default BloodSugarPage;