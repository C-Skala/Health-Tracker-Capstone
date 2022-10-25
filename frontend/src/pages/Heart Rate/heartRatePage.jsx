import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts"; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DeleteHR from './DeleteHR'

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
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);

  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  
  async function deleteHr(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/hr/${props.parentWeight.weight.id}/`)
    console.log(response.data)
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
        <Table striped bordered hover>
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
          </Table>
        </div>
        
          
        <div>
          <Chart
            chartType="LineChart"
            data={[["Date", "heart rate"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}, }}
            legendToggle
          />
        </div>
        <br/>
        <br/>
<div className="d-flex justify-content-around">
  <div>
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Heart Rate
      </Button>
      <Modal
        name = 'Post'
        size = 'lg'
        show={showPost}
        onHide={handlePostClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post A New Heart Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Heart Rate:{" "}</label>
                  <input type = 'number' name = 'heart_rate' value = {formData.heart_rate} onChange = {handleInputChange}/>
                  <br/>
                <label>Date:{" "}</label>
                  <input type = 'date' name = 'date' value = {formData.date} onChange = {handleInputChange}/>
                  <br/>
                <label>Time:{" "}</label>
                  <input type = 'time' name = 'time' value = {formData.time} onChange = {handleInputChange}/>
                  <br/>
                <label>comments:{" "}</label>
                  <input type = "text" name = 'comments' value = {formData.comments} onChange = {handleInputChange}/>
                  <br/>
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
        <div>
          <>
      <Button variant="primary" onClick={handleShow}>
        Show Comments / Delete Posts
      </Button>

      <Modal
        name = 'full table'
        size = 'lg'
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
                <th>Heart Rate</th>
                <th>Date</th>
                <th>Time</th>
                <th>Comments</th>
              </tr>
            </thead>
              <tbody>
                {props.parentHeartRate.map((heartRate, index) => {
                return(
                <tr key={index}>
                  <td>{heartRate.heart_rate}</td>
                  <td>{heartRate.date}</td>
                  <td>{heartRate.time}</td>
                  <td>{heartRate.comments}</td>
                  <td><DeleteHR id = {heartRate.id}/></td>
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
 
export default HeartRatePage;