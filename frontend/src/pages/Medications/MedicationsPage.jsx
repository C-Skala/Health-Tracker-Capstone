import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteMedications from './DeleteMedications'


let initialValues = {
    name: "",
    strength: "",
    class_of_medication: "",
    time_taking1:"",
    time_taking2:"",
    time_taking3:"",
    time_taking4:"",
    comments:"",

};


const MedicationsPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewMed)
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);


  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function postNewMed(){
    const response = await axios.post('http://127.0.0.1:8000/api/meds/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  
   function refreshPage() {
    window.location.reload(false);
  } 
  
  
  
  
  return ( 
      <div>
        <div>
          < Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Medication</th>
                <th>strength</th>
                <th>Class of Medication</th>
                <th>Time Taking (1)</th>
                <th>Time Taking (2)</th>
                <th>Time Taking (3)</th>
                <th>Time Taking (4)</th>
              </tr>
            </thead>
              <tbody>
                {props.parentMedications.map((medications, index) => {
                return(
                <tr key={index}>
                  <td>{medications.name}</td>
                  <td>{medications.strength}</td>
                  <td>{medications.class_of_medication}</td>
                  <td>{medications.time_taking1}</td>
                  <td>{medications.time_taking2}</td>
                  <td>{medications.time_taking3}</td>
                  <td>{medications.time_taking4}</td>
                </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
<br/>
<br/>
<div className="d-flex justify-content-around">
<div>
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Med
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
          <Modal.Title>Post A New Med</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form onSubmit = {handleSubmit}>
            <label>Name of Medication: {" "}</label>
                  <input type = 'text' name = 'name' value = {formData.name} onChange = {handleInputChange}/>
                  <br/>
                <label>Strength: {" "}</label>
                  <input type = 'number' name = 'strength' value = {formData.strength} onChange = {handleInputChange}/>
                  <br/>
                <label>Class of Medication: {" "}</label>
                  <input type = 'text' name = 'class_of_medication' value = {formData.class_of_medication} onChange = {handleInputChange}/>
                  <br/>
                <label>Time Taking (1): {" "}</label>
                  <input type = 'time' name = 'time_taking1' value = {formData.time_taking1} onChange = {handleInputChange}/>
                  <br/>
                <label>Time Taking (2): {" "}</label>
                  <input type = 'time' name = 'time_taking2' value = {formData.time_taking2} onChange = {handleInputChange}/>
                  <br/>
                <label>Time Taking (3): {" "}</label>
                  <input type = 'time' name = 'time_taking3' value = {formData.time_taking3} onChange = {handleInputChange}/>
                  <br/>
                <label>Time Taking (4): {" "}</label>
                  <input type = 'time' name = 'time_taking4' value = {formData.time_taking4} onChange = {handleInputChange}/>
                  <br/>
                <label>comments: {" "}</label>
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
          < Table striped bordered hover>
            <thead>
              <tr>
                <th>Name of Medication</th>
                <th>strength</th>
                <th>Class of Medication</th>
                <th>Comments</th>
              </tr>
            </thead>
              <tbody>
                {props.parentMedications.map((medications, index) => {
                return(
                <tr key={index}>
                  <td>{medications.name}</td>
                  <td>{medications.strength}</td>
                  <td>{medications.class_of_medication}</td>
                  <td>{medications.comments}</td>
                  <td><DeleteMedications id = {medications.id} buttonName = {'Delete Med'}/></td>
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
 
export default MedicationsPage;