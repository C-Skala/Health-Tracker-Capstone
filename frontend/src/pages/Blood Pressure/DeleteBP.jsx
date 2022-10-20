import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    systolic: "",
    diastolic: "",
    date:"",
    time:"",
    comments:"",

};


const DeleteBP = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteBP)


    async function deleteBP(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/BP/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteBP} onChange = {handleInputChange}>Delete BP</button>
        </div>
     );
}
 
export default DeleteBP;