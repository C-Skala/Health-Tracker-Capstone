import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    strength: "",
    class_of_medication: "",
    time_taking1:"",
    time_taking2:"",
    time_taking3:"",
    time_taking4:"",
    comments:"",

};


const MedicationsPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewBP)


  async function postNewBP(){
    const response = await axios.post('http://127.0.0.1:8000/api/meds/', formData, {
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
                <th>strength</th>
                <th>Class of Medication</th>
                <th>Date</th>
                <th>Time Taking (1)</th>
              </tr>
            </thead>
              <tbody>
                {props.parentMedications.map((medications, index) => {
                return(
                <tr key={index}>
                  <td>{medications.strength}</td>
                  <td>{medications.class_of_medication}</td>
                  <td>{medications.time_taking1}</td>
                  <td>{medications.time_taking2}</td>
                  <td>{medications.time_taking3}</td>
                  <td>{medications.time_taking4}</td>
                </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Strength:{" "}</label>
                  <input type = 'number' name = 'strength' value = {formData.strength} onChange = {handleInputChange}/>
                <label>Class of Medication:{" "}</label>
                  <input type = 'text' name = 'class_of_medication' value = {formData.class_of_medication} onChange = {handleInputChange}/>
                <label>Time Taking (1):{" "}</label>
                  <input type = 'time' name = 'time_taking1' value = {formData.time_taking1} onChange = {handleInputChange}/>
                <label>Time Taking (2):{" "}</label>
                  <input type = 'time' name = 'time_taking2' value = {formData.time_taking2} onChange = {handleInputChange}/>
                <label>Time Taking (3):{" "}</label>
                  <input type = 'time' name = 'time_taking3' value = {formData.time_taking3} onChange = {handleInputChange}/>
                <label>Time Taking (4):{" "}</label>
                  <input type = 'time' name = 'time_taking4' value = {formData.time_taking4} onChange = {handleInputChange}/>
                <label>comments:{" "}</label>
                  <input type = "text" name = 'comments' value = {formData.comments} onChange = {handleInputChange}/>
                <button onClick={refreshPage}>submit</button>
            </form>
        </div> 
      </div>
        
     );
}
 
export default MedicationsPage;