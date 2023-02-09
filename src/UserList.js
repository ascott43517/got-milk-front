import React from 'react';
import Users from './Users';

const UserList = (props) => {
  return (
    props.userData.map((user) => {
      return (
        <Users
          key={user.user_id}
          user_id={user.user_id}
          address={user.address}
          username={user.username}
          // onboardClick={props.onboardClick}
          
        ></Users>
      );
    })
  );  
};

export default UserList;