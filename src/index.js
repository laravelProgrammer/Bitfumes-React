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

  function Message(props){
    if(props.value){
         return <h1>hamza</h1>
    }
    else{
         return <h1>Asad</h1>
    }
  }

   class Pass extends React.Component{
        constructor(props){
             super(props);
             this.state={
                  value:true
             }
        }

        Change(){
             
            this.setState({
               value:!this.state.value
            });
        }
        render(){
             return(<div>
               <button onClick={this.Change.bind(this)}>Click Me to Change Message</button>
               <Message value={this.state.value}/>  
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
         <Pass/>
          <NameSun />
          <Watch/>
         <CustomRoutes/>
    </div>
  
   , document.getElementById('root'));


