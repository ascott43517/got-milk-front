import React from 'react';
import NewUserForm from './NewUserForm';

const CreateUserScreen = (props) => {

return (
  <NewUserForm handleUserSubmit={props.handleUserSubmit}/>
)

};


export default CreateUserScreen;