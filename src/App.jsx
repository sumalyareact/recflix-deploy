import React from 'react';
import Cards from './Cardss';
import Film from './Filmdata';
import Heading from './Headings';
import CustomizedMenus from './Menu'
function nCard(val){
    return(
      <Cards
    key={val.id}   
    imgSrc={val.imgSrc} 
    title={val.title} 
    mName={val.mName} 
    link={val.link}  
    
    />
    
    )
    }
    
const App = ()=>{
    return(<>
   
        <div className='container-xs p-3  border  '>
        <div className="jumbotron  border border-light sticky-top">
        <Heading/>
        <CustomizedMenus/>
      {/*  <h1 className='display-1 text-light'  >Our <strong className='border border-light bg-dark' style={collo}>NETFLIX</strong> recommendations</h1> */}
       </div>
       <div className='row'>
       
       
       
       {Film.map(nCard)}
       
       
       
       </div>
       </div>
       
       
       
       
       
        
        </> );
}
export default App;