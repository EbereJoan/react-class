import React from "react";
import './Style/ProfileImg.css'
const image = require('../assets/avatar.jpg');
function ProfileImg() {
  
    return (
      <div className="profimg">
        <img  src={image} className="img"></img>
       
      </div>
    );
  }
  
  export default ProfileImg;