import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

let initialValues = {
    sugar: "",
    date:"",
    time:"",
    comments:"",

};


const BloodSugarPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewBS)
  const[chartData, setChartData] = useState([]);
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);

  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  async function deleteBs(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/BS/${props.parentBloodSugar}/`)
    console.log(response.data) 
  }


  const options = {
    title: "Blood Sugar",
    vAxis: { title: "Sugar" },
    hAxis: { title: "Date" },
    seriesType: "bars",
    series: { 5: { type: "line" } }
  }
   

  useEffect(() => {
    let tempChartData = props.parentBloodSugar.map(entry => {
        return [entry.date, entry.sugar];
    })
    setChartData(tempChartData);
}, [props.parentBloodSugar]);
    
      
  
  
  
  
  return ( 
      <div>
        <div>
        <Table striped bordered hover>
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
          </Table>
        </div>
        <div>
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Blood Sugar
      </Button>
      <Modal
        name = 'Post'
        show={showPost}
        onHide={handlePostClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post A New Blood Sugar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Sugar:{" "}</label>
                  <input type = 'number' name = 'sugar' value = {formData.sugar} onChange = {handleInputChange}/>
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
          
        
        <div>
        <Chart
            chartType="LineChart"
            data={[["Date", "Sugar"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}}}
            legendToggle
          />
        </div>
        <div>
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
                <th>sugar</th>
                <th>Date</th>
                <th>Time</th>
                <th>Comments</th>
              </tr>
            </thead>
              <tbody>
                {props.parentBloodSugar.map((bloodSugar, index) => {
                return(
                <tr key={index}>
                  <td>{bloodSugar.sugar}</td>
                  <td>{bloodSugar.date}</td>
                  <td>{bloodSugar.time}</td>
                  <td>{bloodSugar.comments}</td>
                  <td><button onClick = {deleteBs}>delete Blood Sugar</button></td>
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

        
     );
}
 
export default BloodSugarPage;