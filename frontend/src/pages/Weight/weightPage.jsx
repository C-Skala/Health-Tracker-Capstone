import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { Chart } from "react-google-charts";
import './Weight.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

let initialValues = {
  weight: "",
  date: "",
  comments:""
};




const WeightPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewWeight)
  const[chartData, setChartData] = useState([]);
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);

  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function postNewWeight(){
    const response = await axios.post('http://127.0.0.1:8000/api/Weight/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  

   
   async function deleteWeight(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/Weight/${props.parentWeight.id}/`, formData, {
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
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Weight
      </Button>
      <Modal
        name = 'Post'
        show={showPost}
        onHide={handlePostClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post A New Weight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            data={[["Date", "Weight"], ...chartData]}
            width="100%"
            height="400px"
            options = {{legend: {position: 'bottom'}, }}
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
                <th>Weight</th>
                <th>Date</th>
                <th>Comments</th>
              </tr>
            </thead>
              <tbody>
                {props.parentWeight.map((weight, index) => {
                return(
                <tr key={index}>
                  <td>{weight.weight}</td>
                  <td>{weight.date}</td>
                  <td>{weight.comments}</td>
                  <td><button onClick = {deleteWeight} id = {props.parentWeight.id}>delete weight</button></td>
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
 
export default WeightPage;