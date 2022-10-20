import axios from "axios";
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


const DeleteFood = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteFood)


    async function deleteFood(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/food/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteFood} onChange = {handleInputChange}>Delete Food</button>
        </div>
     );
}
 
export default DeleteFood;