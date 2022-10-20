import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
  heart_rate: "",
  date:"",
  time:"",
  comments:"",

};

const DeleteHR = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteHR)


    async function deleteHR(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/HR/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteHR} onChange = {handleInputChange}>Delete HR</button>
        </div>
     );
}
 
export default DeleteHR;