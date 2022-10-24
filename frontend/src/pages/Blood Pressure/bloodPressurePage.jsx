import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DeleteBP from './DeleteBP'

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
  const[chartData, setChartData] = useState([]);
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);

  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
  
  async function deleteBP(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/BP/${props.parentBloodPressure}/`)
    console.log(response.data)
}
  
  useEffect(() => {
    let tempChartData = props.parentBloodPressure.map(entry => {
        return [entry.date, entry.systolic, entry.diastolic];
    })
    setChartData(tempChartData);
}, [props.parentBloodPressure]);
  
  
  return ( 
      <div>
        <div>
        <Table striped bordered hover>
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
          </Table>
        </div>
        
        
        <div>
          <Chart
            chartType="LineChart"
            data={[["Date", "Systolic", "Diastolic"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          />
        </div>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-center">
           <div >
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Blood Pressure
      </Button>
      <Modal
        name = 'Post'
        show={showPost}
        onHide={handlePostClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post A New Blood Pressure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePostClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
          </div>
        <div >
          <>
      <Button variant="primary" onClick={handleShow}>
        Show Comments / Delete Posts
      </Button>

      <Modal
        name = 'full table'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chart with comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Systolic</th>
                <th>Diastolic</th>
                <th>Date</th>
                <th>Time</th>
                <th>Comments</th>
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
                  <td>{bloodPressure.comments}</td>
                  <td><DeleteBP id = {bloodPressure.id}/></td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
          </div> 
        </div>
        
        
       

      </div>
        
     );
}
 
export default BloodPressurePage;