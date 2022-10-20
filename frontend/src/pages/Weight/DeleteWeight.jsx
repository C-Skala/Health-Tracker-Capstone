import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
    weight: "",
    date: "",
    comments:""
  };

const DeleteWeight = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteWeight)


    async function deleteWeight(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/Weight/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteWeight} onChange = {handleInputChange}>Delete Weight</button>
        </div>
     );
}
 
export default DeleteWeight;