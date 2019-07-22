import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './App.css';
// import Clock from './Clock';
// import Helloworld from './App';
// import Method from './Method';
// import Event from './Event';
import CustomRoutes from './Routes';

function Yes(props){
     return <h1>My Name Is : {props.names}</h1>
}
  
function NameSun(){

     return <div>

         <Yes names="Ali"/> <Yes names="Hamza"/> <Yes names="usama"/>

     </div>
       
   
}

class Watch extends React.Component{
     constructor(props){
          super(props);
          this.state={
               dates:new Date()
          }
          
     }

     componentDidMount(){
          this.start();
     }

      
     Stops(){

          clearInterval(this.yes);
      }  
     
     start(){

          this.yes=setInterval(()=>{

               this.setState({
                    dates:new Date()
               });

          },1000)
    
         
     }
     

     render(){

          return(
                 <div>
                   <h1>Time is :- {this.state.dates.toLocaleTimeString()}</h1>
                   <button onClick={this.Stops.bind(this)}>Stop</button>
                 </div>
          ) 
          
     }
}
ReactDOM.render(
    <div>
         {/* <Helloworld link="https://www.facebook.com/" linkText="Facebook"/>
         <Helloworld link="https://www.google.com/" linkText="Google"/>
         <Helloworld link="https://www.youtube.com/" linkText="Youtube"/>
         <Method link="https://www.facebook.com/" name="hamza butt"/>
         <Clock/>

         <Event/> */}
          <NameSun />
          <Watch/>
         <CustomRoutes/>
    </div>
  
   , document.getElementById('root'));


