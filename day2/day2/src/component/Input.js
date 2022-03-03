import './Style/Input.css';
import React, {useState} from 'react';
function Input() {
  const [name,setName] = useState('')
  const [stack,setStack] = useState('')
  const [contact,setContact]= useState('')
  
const Inputs =[
  {name: "Name",
  func :()=>{},
  placeholder:"Enter Name;"
  },
  {name: "Stack",
  func :()=>{},
  placeholder:"Enter Stack;"
  },
  {name: "Contact",
  func :()=>{},
  placeholder:"Enter Contact;"
  },
]


    return (
      
      <div className="inp">
        {console.log(Inputs)}

       {Inputs.map((e,i)=>
       {
         return  ( <div key={i} className='inpcont'>
         <label className='label' >{e.name}:</label>
         <input type="text" className='input' id={e.name} placeholder={e.placeholder}>
         </input></div>)
       }
       )
       }
      
       
       
        
      </div>
     
    );
 
  }
  
  export default Input;