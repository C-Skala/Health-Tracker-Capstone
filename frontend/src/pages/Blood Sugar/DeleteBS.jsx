import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
  sugar: "",
  date:"",
  time:"",
  comments:"",

};

const DeleteBS = (props) => {
    const [user, token] = useAuth();  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, deleteBS)


    async function deleteBS(){
    const response = await axios.delete(`http://127.0.0.1:8000/api/BS/${props.id}/`,{
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    console.log(response.data);
    window.location.reload(false);
   }
    
    return ( 
        <div onSubmit = {handleSubmit}>
        <button onClick = {deleteBS} onChange = {handleInputChange}>Delete BS</button>
        </div>
     );
}
 
export default DeleteBS;