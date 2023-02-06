
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
import { attributesToProps } from 'html-react-parser';
import {useJsApiLoader,GoogleMap} from '@react-google-maps/api'



const kBaseUrl = "http://localhost:5000/"


const getAllPostsApi = () => {
    return axios
      .get(`${kBaseUrl}/posts`)
       .then((response) => {
        
         return response.data;
        
       })
       .catch((err) => {
         console.log(err);
       });
   };
  
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
    return alert("That user does not exist! Please create one")
    // console.log(err);
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

const markPostApi = (post_id) => {
  
 
  return axios
  .patch(`${kBaseUrl}posts/${post_id}/unavailable`,)
  .then((response) => {
    return(response.data);
  })
  .catch((err) => {
    
    console.log(err);
  })

}

const directionsAPI = (data) => {
  return axios 
  .post(`${kBaseUrl}/maps`, data)
  .then((response) => {
    return response.data;
  })
  .catch((err) => {
    console.log(err)
  })

}

const LatLngAPI = (datas) => {
  const data = {"q": datas}
  console.log(data)
  return axios 
  .post(`${kBaseUrl}/maps/latlng`, data )
  .then((response) => {
  
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;

    console.log("lat:" + lat)
    ;
  return { lat: lat, lng: lon }
    
   
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
  const [time, setTime] = useState([])
  const [lng, setLng] = useState([])
  const [lat, setLat] = useState([])
  const [postAddress, setPostAddress] = useState([])
  const [postlng, setPostLng] = useState([])
  const [postlat, setPostLat] = useState([])


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
    ;
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
        console.log('create post response')
        console.log(newUser)
        console.log(newPostFormulaName)
        
        
 
      setCurrentPageName("Dashboard")
      getAllPostsApi().then((user) =>{
        console.log('get all posts return')
        console.log(user)
        setProfileData(user)
      })
      
      // .catch((e) => console.log(e));
      });
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
    console.log(newUserEmail)
      getUserAPI(newUserEmail)
      .then((user) => {
      if (user.username === newUserEmail){
       
          setCurrentUser(user);
          setCurrentPageName("Dashboard");
          // getUserPostsAPI(user.user_id)
        //  console.log(getUserPostsAPI(user.user_id));
      }
      getAllPostsApi().then((user) =>{
        console.log(user)
        setProfileData(user)
      })
     }) 
     setCurrentPageName("New-User")
    
     
      // .catch((e) =>   console.log(e))
    };
  

  const getDirections = (data) => {
   console.log(data)
  getLatLngPost(data.post_address)
  getLatLng(data.origin)
   directionsAPI(data)
   .then((directions) => {
    const legs = [];
    const steps = directions.routes[0].legs[0].steps
    const duration = directions.routes[0].legs[0].duration.text
    for(let i = 0; i< steps.length; i++){
      const a = steps[i].html_instructions.replace(/<[^>]*>/g,'')
      
      
    
      // legs.push(steps[i].html_instructions)
      legs.push(i+1 + "."+ a)
      // legs.push(a)
      // legs.push('')
   
    }
    // directions.routes[0].legs[0].duration.text
    // console.log(steps[i].html_instructions)
    
    setaddress(legs)
    setTime(duration) 
    setCurrentPageName("Directions")
   
    
    // console.log(legs)
  
   })
   .catch((e) => console.log(e));
  };


  const getLatLng = (address) => {
    
    LatLngAPI(address)
    .then((response) => {
    console.log('Lat Lng response:')
     console.log (response)
     setLat(parseFloat(response["lat"]))
     setLng(parseFloat(response["lng"]))
    //  console.log(response["lat"]);
    //  console.log(response["lng"]);
     
     })
    .catch((e) => console.log(e));
   };

   const getLatLngPost = (address) => {
    
    LatLngAPI(address)
    .then((response) => {
    console.log('Lat Lng response post:')
     console.log (response)
     const lat = (parseFloat(response["lat"]))
     const lng = (parseFloat(response["lng"]))
     setPostLat(lat);
     setPostLng(lng);
  
 
;
     
     })
    .catch((e) => console.log(e));
   };

  const dashboardClick = () => {
    setCurrentPageName("Dashboard")
    getAllPostsApi().then((user) =>{
      console.log(user)
      setProfileData(user)
   })
  }

  const postClick = () => {
    setCurrentPageName("Post")
  }

  const editUserClick = () => {
    setCurrentPageName("Edit-User")
  }


  const directionsClick = (data) => {

    console.log(data)

// getLatLng(data.origin)
//   getLatLngPost(data.post_address)
getDirections(data);
// setCurrentPageName("Directions")
markPost(data.post)
setPostAddress(data.post_address)
//  setCurrentPageName("Directions")



// use data.address to get post address to store soe
  }

  const profileClick = () => {
    setCurrentPageName("Profile")
    getUserPostsAPI(currentUser.user_id)
    .then((posts) => {
      console.log(posts)
      setProfileData(posts.posts);

     })
     .catch((e) => console.log(e));
     };


  
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



    const markPost = (post_id) => {
markPostApi(post_id)
.then ((post)=> {
  console.log(post);
})
.catch((e) => console.log(e))

    };

  return (
    <div className="App">
      <header className="App-header">
      <section className="U">
      
     
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
     dashboardClick={dashboardClick}
     profileClick={profileClick}
     directionsClick={directionsClick}
     getDirections={getDirections}
     setaddress={setaddress}
     address={address}
     time={time}
     setTime={setTime}
     getLatLng={getLatLng}
     lat={lat}
     lng={lng}
     postAddress={postAddress}
     getLatLngPost={getLatLngPost}
     setPostAddress={setPostAddress}
     setPostLng={setPostLng}
     setPostLat={setPostLat}
     postlat={postlat}
     postlng={postlng}

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
