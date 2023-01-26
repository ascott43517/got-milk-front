
import './App.css';
import Users from './Users';
import { useEffect, useState } from "react";
import axios from 'axios';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import CreateUserScreen from './CreateUserScreen';




const kBaseUrl = "http://localhost:5000/"



const getAllUsersApi = () => {
  return axios
    .get(`${kBaseUrl}/users`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const addNewUserApi = (userData,) => {
  const currentData = {...userData};
  return axios
    .post(`${kBaseUrl}/users`, currentData)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const directionsAPI = (data) => {
  const currentData = {...data};
  return axios 
  .get(`${kBaseUrl}/maps`, currentData)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    console.log(err)
  })

}
function App() {
  const [userData, setUserData] = useState([])
  const [address, setaddress] = useState([])
  


  const getAllUsers = () => {
    getAllUsersApi().then((users) => {
      setUserData(users)

    })
  }
  useEffect(() => {
    // data fetching code
    getAllUsers();
  }, [userData]);


  const handleUserSubmit = (newUserAddress,newUserUsername) => {

     addNewUserApi(newUserAddress, newUserUsername)
     .then((newUser) => {
      console.log(newUser);

      setUserData([...userData,newUser])
     })
     .catch((e) => console.log(e));
     };
  
    
  const getDirections = (address) => {

   directionsAPI(address)
   .then((directions) => {
    const legs = [];
    const steps = directions.routes[0].legs[0].steps
    for(let i = 0; i< steps.length; i++){
     const a = steps[i].html_instructions.replace(/<[^>]*>/g,'')
      
      
    
      // legs.push(steps[i].html_instructions)
      legs.push(i+1 + ".")
      legs.push(a)
      legs.push('')
   
    }
    // directions.routes[0].legs[0].duration.text
    // console.log(steps[i].html_instructions)
    
    setaddress(legs) 
    
    // console.log(legs)
  
   })
   .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <header className="App-header">
      <section className="U">
      
      
      </section>
      <section className='Users'>
        <CreateUserScreen handleUserSubmit={handleUserSubmit}/>
       Current Users Created: 
       <UserList
       userData={userData}
       handleUserSubmit = {handleUserSubmit}/>
      
      <button className='directions' onClick={() => getDirections(address)}>Get Directions </button> 
      </section>
      {address}
      </header>
    </div>
  );
  };


export default App;
