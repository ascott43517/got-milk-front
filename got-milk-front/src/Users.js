import React from 'react';
import PropTypes from 'prop-types';
import "./Users.css";
import NewUserForm from './NewUserForm';
import axios from 'axios';

// const handleUserSubmit = (newUserAddress,newUserUsername) => {

//   const addNewUserApi = (username,address,) => {
//     const currentData = { username,address };
//     return axios
//       .post(`${kBaseUrl}/users`, currentData)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   addNewUserApi(data)
//     .then((newUser) => {
//       setUserData([...userData, newUser]);
//     })
//     .catch((e) => console.log(e));
// };


const Users = (props) => {
  return (
    
      <section className='log-in'> 
  
      <p>User:  {props.user_id} Username : {props.username}</p>
      
      
      </section>
   
   
    
  )
};

Users.propTypes = {
  user_id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  username:PropTypes.string.isRequired,
  
}

export default Users;