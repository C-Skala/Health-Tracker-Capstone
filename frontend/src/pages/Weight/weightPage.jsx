import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts";
import './Weight.css'

let initialValues = {
  weight: "",
  date: "",
  comments:""
};


const WeightPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewWeight)
  const[chartData, setChartData] = useState([]);

  async function postNewWeight(){
    const response = await axios.post('http://127.0.0.1:8000/api/Weight/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  
   function refreshPage() {
    window.location.reload(false);
  } 
  
  
   //function to get chart data
  useEffect(() => {
      let tempChartData = props.parentWeight.map(entry => {
          return [entry.date, entry.weight];
      })
      setChartData(tempChartData);
  }, [props.parentWeight]);

  
  
  
  return ( 
      <div>
        <div>
          <table className = 'table'>
            <thead>
              <tr>
                <th>Weight</th>
                <th>Date</th>
              </tr>
            </thead>
              <tbody>
                {props.parentWeight.map((weight, index) => {
                return(
                <tr key={index}>
                  <td>{weight.weight}</td>
                  <td>{weight.date}</td>
                </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
               <label>Weight:{" "}</label>
                <input type = 'number' name = 'weight' value = {formData.weight} onChange = {handleInputChange}/>
                <label>Date:{" "}</label>
                  <input type = 'date' name = 'date' value = {formData.date} onChange = {handleInputChange}/>
                <label>comments:{" "}</label>
                  <input type = "text" name = 'comments' value = {formData.comments} onChange = {handleInputChange}/>
                <button onClick={refreshPage}>submit</button>
            </form>
        </div> 
        <div>
          <Chart
            chartType="LineChart"
            data={[["Date", "Weight"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          />
        </div>
      </div>
        
     );
}
 
export default WeightPage;