import React from 'react'
 const MyButton =(props)=>{
     const {count ='暫無',increment}=props;

     return (
         <div>
             <button style={props.defaultStyle} onClick={increment}>{props.text}</button>
             <h1>{count}</h1>
         </div>
     )
 }

 export default MyButton;