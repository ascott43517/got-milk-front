import { useState } from "react";


const kdefaultFormState = {
  email:"",
  password:"",
};

const NewUserForm = ({ handleUserSubmit, }) => {
  const [formData, setFormData] = useState(kdefaultFormState);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name
    const newFormData = {...formData, [fieldName]: fieldValue}
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserSubmit(formData);
    setFormData(kdefaultFormState);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="address"> Address</label>
        <input type="text" id="address"name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address"/>
      </div>
      <div>
        <label htmlFor="username"> User Name</label>
        <input type="text" id="username"name="username" value={formData.username} onChange={handleChange} placeholder="Enter Username"/>
      </div>
      <div><input type ="submit" value="Create New User"/></div>
    </form>
  );
};

export default NewUserForm;