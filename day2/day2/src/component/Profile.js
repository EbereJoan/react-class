import React from 'react';
import Profileimg from "./ProfileImg";
import Button from "./Button";
import Input from "./Input";
import './Style/Profile.css';
function Profile() {
  
    return (
      <div className='card'>
        <Profileimg/>
        <Input/>
        <Button/>
      
        </div>
      
     
    );
 
  }
  
  export default Profile;