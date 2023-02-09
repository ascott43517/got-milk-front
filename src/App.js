
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import './Login.css';
import PageContent from './PageContent';


import {LoadScript} from '@react-google-maps/api'


const YOUR_API_KEY = 'AIzaSyD8c9x3lhVeazWn29rL5HrWJgT6FAJ-Bqc'

const kBaseUrl = "https://got-milk.herokuapp.com/"


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

 
  return axios
  .get(`${kBaseUrl}/users/${username}`)
  .then((response) => {
    return (response.data);
  })
  .catch((err) => {
    return alert("That user does not exist! Please create one")
    
  })

}

const getUserPostsAPI = (user_id) => {
  
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

const library = ['places']
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


  useEffect(() => {
    // data fetching code
    ;
  }, [currentUser]);


  const handleUserSubmit = (newUserAddress,newUserUsername) => {



console.log(newUserAddress)
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
      }
      getAllPostsApi().then((user) =>{
        console.log(user)
        setProfileData(user)
      })
     }) 
     setCurrentPageName("New-User")
    };
  

  const getDirections = (data) => {
   console.log(data)
  getLatLngPost(data.post_address)
  getLatLng(data.origin)
   directionsAPI(data)
   .then((directions) => {
    console.log(directions)
    const legs = [];
    const steps = directions.routes[0].legs[0].steps
    const duration = directions.routes[0].legs[0].duration.text
    for(let i = 0; i< steps.length; i++){
      const a = steps[i].html_instructions.replace(/<[^>]*>/g,'')
      
      legs.push(i+1 + "."+ a) 
    }
   
    setaddress(legs)
    setTime(duration) 
    setCurrentPageName("Directions")
   
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


getDirections(data);

markPost(data.post)
setPostAddress(data.post_address)

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
    <LoadScript googleMapsApiKey={YOUR_API_KEY} libraries= {library}>
      
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
       </section>
      </header>
    </div>
    
    </LoadScript>
  );
  };

export default App;
