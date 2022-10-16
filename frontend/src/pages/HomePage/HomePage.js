import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";


const HomePage = (props) => {
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
 const[bpChartData, setBpChartData] = useState([]);
 const[bsChartData, setBsChartData] = useState([]);
 const[hrChartData, setHrChartData] = useState([]);
 const[weightChartData, setWeightChartData] = useState([]);

 useEffect(() => {
  let tempBPChartData = props.parentBloodPressure.map(entry => {
      return [entry.date, entry.systolic, entry.diastolic];
  })
  setBpChartData(tempBPChartData);
}, [props.parentBloodPressure]);

useEffect(() => {
  let tempBSChartData = props.parentBloodSugar.map(entry => {
      return [entry.date, entry.sugar];
  })
  setBsChartData(tempBSChartData);
}, [props.parentBloodSugar]);


useEffect(() => {
  let tempHRChartData = props.parentHeartRate.map(entry => {
      return [entry.date, entry.heart_rate];
  })
  setHrChartData(tempHRChartData);
}, [props.parentHeartRate]);

useEffect(() => {
  let tempWeightChartData = props.parentWeight.map(entry => {
      return [entry.date, entry.weight];
  })
  setWeightChartData(tempWeightChartData);
}, [props.parentWeight]);

const data = [
//  [["Date", "Weight"], ...weightChartData],
//  [["Date", "Systolic", "Diastolic"], ...bpChartData]
//]
  [['date','weight'], ...weightChartData, ['date', 'systolic', 'diastolic'], ...bpChartData, ['date', 'heart rate'], ...hrChartData, ['date', 'sugar'], ...bsChartData],
  //['10-10-2020',200, 100, 50, 50, 75],
  //['10-10-2020',250, 150, 90, 90, 150],
  //['10-10-2020', props.parentWeight.weight, props.parentBloodPressure.systolic, props.parentBloodPressure.diastolic, props.parentHeartRate.heart_rate, props.parentBloodSugar.sugar]
]





  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
          <Chart
            chartType="LineChart"
            data={data}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          />
        </div>

    </div>
  );
};

export default HomePage;
