import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DeleteFood from './DeleteFood'

let initialValues = {
    name: "",
    calories: "",
    carbohydrates:"",
    sugar:"",
    sodium:"",
    servings:"",
    date:"",
    comments:"",

};


const FoodPage = (props) => {
  const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewFood)
  const [show, setShow] = useState(false);
  const [showPost, setPostShow] = useState(false);

  const handlePostClose = () => setPostShow(false);
  const handlePostShow = () => setPostShow(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function postNewFood(){
    const response = await axios.post('http://127.0.0.1:8000/api/food/', formData, {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data)
   }
  
   function refreshPage() {
    window.location.reload(false);
  } 
  
  
  async function deleteFood(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/food/${props.parentWeight.weight.id}/`)
    console.log(response.data)
}
  
  
  return ( 
      <div>
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
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
         <div>
        <>
      <Button variant="primary" onClick={handlePostShow}>
        Post a New Food
      </Button>
      <Modal
        name = 'Post'
        show={showPost}
        onHide={handlePostClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post A New Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Nme of Food:{" "}</label>
                  <input type = 'text' name = 'name' value = {formData.name} onChange = {handleInputChange}/>
                <label>Calories per serving:{" "}</label>
                  <input type = 'number' name = 'calories' value = {formData.calories} onChange = {handleInputChange}/>
                <label>Carbohydrates per Serving:{" "}</label>
                  <input type = 'number' name = 'carbohydrates' value = {formData.carbohyrates} onChange = {handleInputChange}/>
                <label>Sugar per Serving:{" "}</label>
                  <input type = 'number' name = 'sugar' value = {formData.sugar} onChange = {handleInputChange}/>
                <label>Sodium per Serving:{" "}</label>
                  <input type = 'number' name = 'sodium' value = {formData.sodium} onChange = {handleInputChange}/>
                <label>Number of Servings:{" "}</label>
                  <input type = 'number' name = 'servings' value = {formData.servings} onChange = {handleInputChange}/>
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
                <th>Food Name</th>
                <th>Number of Servings</th>
                <th>Date</th>
                <th>Comments</th>
              </tr>
            </thead>
              <tbody>
                {props.parentFood.map((food, index) => {
                return(
                <tr key={index}>
                  <td>{food.name}</td>
                  <td>{food.servings}</td>
                  <td>{food.date}</td>
                  <td>{food.comments}</td>
                  <td><DeleteFood id = {food.id}/></td>
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
 
export default FoodPage;