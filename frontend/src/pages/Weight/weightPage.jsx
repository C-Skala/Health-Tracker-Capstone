import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts";
import './Weight.css';

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
        <div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
            Post Song
          </button>
          <div class="modal" id="myModal">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
           <h4 class="modal-title">Modal Heading</h4>
           <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
           <div class="modal-body">
            Modal body..
            </div>
            <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>
           </div>
          </div>
        </div>
        
     );
}
 
export default WeightPage;