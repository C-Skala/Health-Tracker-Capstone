import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';




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
 const[bpChartData, setBpChartData] = useState([]);
 const[bsChartData, setBsChartData] = useState([]);
 const[hrChartData, setHrChartData] = useState([]);
 const[weightChartData, setWeightChartData] = useState([]);

 useEffect(() => {
  let tempBPChartData = props.parentBloodPressure.map(entry => {
      return [entry.date, entry.systolic, entry.diastolic];
  })
  setBpChartData(tempBPChartData);
  console.log(tempBPChartData);
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
}, [props.parentWeight]);

function ShowWeight() {
  const [show, setShow] = useState(false);
return(
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Weight</strong>
          </Toast.Header>
          <Toast.Body><Chart
            chartType="LineChart"
            data={[["Date", "Weight"], ...weightChartData]}
            width="100%"
            height="275px"
            options = {{legend: {position: 'bottom'}, }}
            legendToggle
          /></Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Weight</Button>
      </Col>
    </Row>
)};
function ShowSugar() {
  const [show, setShow] = useState(false);
return(
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Sugar</strong>
          </Toast.Header>
          <Toast.Body><Chart
            chartType="LineChart"
            data={[["Date", "Sugar"], ...bsChartData]}
            width="100%"
            height="275px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          /></Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Sugar</Button>
      </Col>
    </Row>
)};
function ShowHeartRate() {
  const [show, setShow] = useState(false);
return(
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Heart Rate</strong>
          </Toast.Header>
          <Toast.Body> <Chart
            chartType="LineChart"
            data={[["Date", "heart rate"], ...hrChartData]}
            width="100%"
            height="275px"
            options = {{legend: {position: 'bottom'}, }}
            legendToggle
          /></Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Heart Rate</Button>
      </Col>
    </Row>
)};
function ShowBloodPressure() {
  const [show, setShow] = useState(false);
return(
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Blood Pressure</strong>
          </Toast.Header>
          <Toast.Body> <Chart
            chartType="LineChart"
            data={[["Date", "Systolic", "Diastolic"], ...bpChartData]}
            width="100%"
            height="275px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          /></Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Blood Pressure</Button>
      </Col>
    </Row>
)};



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
      <div className="d-flex justify-content-center">
      {ShowWeight()}
      {ShowSugar()}
      {ShowHeartRate()}
      {ShowBloodPressure()}
      </div>
     
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
