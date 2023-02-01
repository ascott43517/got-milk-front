
import './App.css';
import Users from './Users';
import { useEffect, useState } from "react";
import axios from 'axios';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import Login from './Login';
import './Login.css';
import PageContent from './PageContent';
import Profile from './Profile';
import PostData from './PostData';



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

const editUserApi = (username) => {
  
  const currentData = {...username};


  return axios
    .patch(`${kBaseUrl}/users/${username}`, currentData)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


const getUserAPI = (username) => {
  const currentData = {...username}
 
  return axios
  .get(`${kBaseUrl}/users/${username}`)
  .then((response) => {
    return (response.data);
  })
  .catch((err) => {
    
    console.log(err);
  })

}

const getUserPostsAPI = (user_id) => {
  const currentData = {...user_id}
  return axios
  .get(`${kBaseUrl}/users/${user_id}/posts`)
  .then((response) => {
    return(response.data);
  })
  .catch((err) => {
    
    console.log(err);
  })

}


const createPostAPI = (data,) => {
  const currentData = {...data}
 
  return axios
  .post(`${kBaseUrl}posts`, data)
  .then((response) => {
    return(response.data);
  })
  .catch((err) => {
    
    console.log(err);
  })

}






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
  const [currentForm, setCurrentForm] = useState('Login')
  const [userData, setUserData] = useState([])
  const [address, setaddress] = useState([])
  const [currentPageName, setCurrentPageName] = useState('Login')
  const [currentUser, setCurrentUser] = useState([])
  const [profileData, setProfileData] = useState([])


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  const getAllUsers = () => {
    getAllUsersApi().then((users) => {
      setUserData(users)

    })
  }
  useEffect(() => {
    // data fetching code
    getAllUsers();
  }, [currentUser]);


  const handleUserSubmit = (newUserAddress,newUserUsername) => {

     addNewUserApi(newUserAddress, newUserUsername )
     .then((newUser) => {
      console.log(newUser);

      setCurrentPageName("Login")
     })
     .catch((e) => console.log(e));
     };

  const handlePostSubmit = (newPostFormulaName, ) => {
      
      createPostAPI(newPostFormulaName)
      .then((newUser) => {
        console.log(newPostFormulaName)
        
 
      //  setCurrentPageName("Dashboard")
      })
      .catch((e) => console.log(e));
      };

  const handleEditProfileSubmit = (newUserAddress, newUserUsername) => {
      
      editUserApi(newUserAddress, newUserUsername)
      .then((newUser) => {
       

        setCurrentPageName("Profile")
        setCurrentUser(newUser)
      
        
      })
      .catch((e) => console.log(e));
      };


  const handleLoginSubmit = (newUserEmail) => {
      
      getUserAPI(newUserEmail)
      .then((user) => {
      if (user.username === newUserEmail){
       
          setCurrentUser(user);
          setCurrentPageName("Profile");
          // getUserPostsAPI(user.user_id)
        //  console.log(getUserPostsAPI(user.user_id));
      }
      getUserPostsAPI(user.user_id).then((user) =>{
        setProfileData(user.posts)
      })
     }) 
     setCurrentPageName("New-User")
    //  alert("No user")
     
      // .catch((e) =>   console.log(e))
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


  const postClick = () => {
    setCurrentPageName("Post")
  }

  const editUserClick = () => {
    setCurrentPageName("Edit-User")
  }

  const getPosts = (user_id) => {
    getUserPostsAPI(user_id)
    .then((posts) => {
      console.log(posts)
      setProfileData(posts.posts);

     })
     .catch((e) => console.log(e));
     };

     const logout = () => {
      setCurrentPageName("Login")
    }
  return (
    <div className="App">
      <header className="App-header">
      <section className="U">
      
      {/* {currentForm === "login" ? <Login onFormSwitch = {toggleForm} /> : <CreateUserScreen handleUserSubmit={handleUserSubmit} onFormSwitch={toggleForm}/>} */}
      </section>
       <section className='Users'>
     <PageContent
     setCurrentPageName = {setCurrentPageName}
     currentPageName = {currentPageName}
     handleUserSubmit={handleUserSubmit}
     handleLoginSubmit={handleLoginSubmit}
     currentUser={currentUser}
     setCurrentUser={setCurrentUser}
     postClick={postClick}
     logout={logout}
     editUserClick={editUserClick}
    getPosts={getPosts}
     profileData= {profileData}
     setProfileData={setProfileData}
    getUserPostsAPI = {getUserPostsAPI}
     handleEditProfileSubmit={handleEditProfileSubmit}
     handlePostSubmit={handlePostSubmit}

     />
    
       {/* Current Users Created:  */}
       {/* <UserList
       userData={userData}
       handleUserSubmit = {handleUserSubmit}/> */}
       </section>
       {/* <button className='directions' onClick={() => getDirections(address)}>Get Directions </button> 
      
       
      {address}  */}
      </header>
    </div>
  );
  };


export default App;
