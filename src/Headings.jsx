import React from 'react';
const collo={
    color:'red'
 
 }
 
const Heading = ()=>{
   return( <h1 className='display-1 text-light'  >Our <strong className='border border-light bg-dark' style={collo}>NETFLIX</strong> recommendations</h1>);
}
export default Heading;