import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts"; 

let initialValues = {
    heart_rate: "",
    date:"",
    time:"",
    comments:"",

};


const HeartRatePage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewHR)
  const[chartData, setChartData] = useState([]);


  async function postNewHR(){
    const response = await axios.post('http://127.0.0.1:8000/api/HR/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  
   function refreshPage() {
    window.location.reload(false);
  } 
  
  
  useEffect(() => {
    let tempChartData = props.parentHeartRate.map(entry => {
        return [entry.date, entry.heart_rate];
    })
    setChartData(tempChartData);
}, [props.parentHeartRate]);
  
  
  return ( 
      <div>
        <div>
          <table className = 'table'>
            <thead>
              <tr>
                <th>Heart Rate</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
              <tbody>
                {props.parentHeartRate.map((heartRate, index) => {
                return(
                <tr key={index}>
                  <td>{heartRate.heart_rate}</td>
                  <td>{heartRate.date}</td>
                  <td>{heartRate.time}</td>
                </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Heart Rate:{" "}</label>
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
        <div>
          <Chart
            chartType="LineChart"
            data={[["Date", "Heart Rate"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          />
        </div>
      </div>
        
     );
}
 
export default HeartRatePage;