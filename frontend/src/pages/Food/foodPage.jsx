import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

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
  
  
  
  
  
  return ( 
      <div>
        <div>
          <table className = 'table'>
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
          </table>
        </div>
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
      </div>
        
     );
}
 
export default FoodPage;