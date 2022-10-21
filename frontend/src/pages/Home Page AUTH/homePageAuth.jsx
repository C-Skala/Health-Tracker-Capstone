import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


const HomePageAUTH = (props) => {
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
 const[bpChartDataS, setBpChartDataS] = useState([]);
 const[bpChartDataD, setBpChartDataD] = useState([]);
 const[bsChartData, setBsChartData] = useState([]);
 const[hrChartData, setHrChartData] = useState([]);
 const[weightChartData, setWeightChartData] = useState([]);

 useEffect(() => {
  let tempBPChartDataS = props.parentBloodPressure.map(entry => {
      return [entry.date, entry.systolic];
  })
  setBpChartDataS(tempBPChartDataS);
  console.log(tempBPChartDataS);
}, [props.parentBloodPressure]);

 useEffect(() => {
  let tempBPChartDataD = props.parentBloodPressure.map(entry => {
      return [entry.date, entry.diastolic];
  })
  setBpChartDataD(tempBPChartDataD);
  console.log(tempBPChartDataD);
}, [props.parentBloodPressure]);

useEffect(() => {
  let tempBSChartData = props.parentBloodSugar.map(entry => {
      return [entry.date, entry.sugar];
  })
  setBsChartData(tempBSChartData);
  console.log(tempBSChartData);
}, [props.parentBloodSugar]);


useEffect(() => {
  let tempHRChartData = props.parentHeartRate.map(entry => {
      return [entry.date, entry.heart_rate];
  })
  setHrChartData(tempHRChartData);
  console.log(tempHRChartData);
}, [props.parentHeartRate]);

useEffect(() => {
  let tempWeightChartData = props.parentWeight.map(entry => {
      return [entry.date, entry.weight];
  })
  setWeightChartData(tempWeightChartData);
  console.log(tempWeightChartData);
  
}, [props.parentWeight]);



const data = [

  ['date', 'weight', 'systolic', 'diastolic', 'sugar', 'heart rate'],
  ['10-10-2020',250, 150, 90, 90, 150],
  ['10-10-2020',300, 100, 190, null, 350],
 
]

const options = {
  title: "all my vitals",
  vAxis: { title: "" },
  hAxis: { title: "date" },
  seriesType: "bars",
  //series: { 5: { type: "line" } },
};


//


  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
          <Chart
            chartType="ComboChart"
            data={data}
            width="100%"
            height="400px"
            options = {options}
            legendToggle
          />
        </div>
        <div>
          <Table striped bordered hover>
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
          </Table>
        </div> 
        <div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sugar</th>
                <th>Date</th>
              </tr>
            </thead>
              <tbody>
                {props.parentBloodSugar.map((bloodSugar, index) => {
                return(
                <tr key={index}>
                  <td>{bloodSugar.sugar}</td>
                  <td>{bloodSugar.date}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
         <div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Heart Rate</th>
                <th>Date</th>
              </tr>
            </thead>
              <tbody>
                {props.parentHeartRate.map((heartRate, index) => {
                return(
                <tr key={index}>
                  <td>{heartRate.heart_rate}</td>
                  <td>{heartRate.date}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Systolic</th>
                <th>Diastolic</th>
                <th>Date</th>
              </tr>
            </thead>
              <tbody>
                {props.parentBloodPressure.map((bloodPressure, index) => {
                return(
                <tr key={index}>
                  <td>{bloodPressure.systolic}</td>
                  <td>{bloodPressure.diastolic}</td>
                  <td>{bloodPressure.date}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <div>
          < Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Medication</th>
                <th>strength</th>
                <th>Class of Medication</th>
              </tr>
            </thead>
              <tbody>
                {props.parentMedications.map((medications, index) => {
                return(
                <tr key={index}>
                  <td>{medications.name}</td>
                  <td>{medications.strength}</td>
                  <td>{medications.class_of_medication}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Food Name</th>
                <th>Calories per serving</th>
                <th>Carbohydrates per Serving</th>
                <th>Sugar per Serving</th>
                <th>Sodium per Serving</th>
                <th>Number of Servings</th>
                <th>Date</th>
              </tr>
            </thead>
              <tbody>
                {props.parentFood.map((food, index) => {
                return(
                <tr key={index}>
                  <td>{food.name}</td>
                  <td>{food.calories}</td>
                  <td>{food.carbohydrates}</td>
                  <td>{food.sugar}</td>
                  <td>{food.sodium}</td>
                  <td>{food.servings}</td>
                  <td>{food.date}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>

       

        

        
    </div>
  );
};

export default HomePageAUTH;
