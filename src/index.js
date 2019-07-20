import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './App.css';
// import Clock from './Clock';
// import Helloworld from './App';
// import Method from './Method';
// import Event from './Event';
import CustomRoutes from './Routes';

ReactDOM.render(
    <div>
         {/* <Helloworld link="https://www.facebook.com/" linkText="Facebook"/>
         <Helloworld link="https://www.google.com/" linkText="Google"/>
         <Helloworld link="https://www.youtube.com/" linkText="Youtube"/>
         <Method link="https://www.facebook.com/" name="hamza butt"/>
         <Clock/>

         <Event/> */}

         <CustomRoutes/>
    </div>
  
   , document.getElementById('root'));


