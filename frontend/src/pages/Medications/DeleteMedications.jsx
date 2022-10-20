import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

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

const DeleteMedications = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteMedications)


    async function deleteMedications(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/meds/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteMedications} onChange = {handleInputChange}>Delete Med</button>
        </div>
     );
}
 
export default DeleteMedications;